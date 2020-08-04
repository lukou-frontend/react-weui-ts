import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

var TextArea = /*#__PURE__*/function (_React$Component) {
  _inherits(TextArea, _React$Component);

  var _super = _createSuper(TextArea);

  function TextArea() {
    var _this;

    _classCallCheck(this, TextArea);

    _this = _super.apply(this, arguments);
    _this.state = {
      textCounter: _this.props.defaultValue ? _this.props.defaultValue.length : 0
    };
    return _this;
  }

  _createClass(TextArea, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        textCounter: e.target.value.length
      }); //forward event to props if any

      this.props.onChange && this.props.onChange(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          children = _a.children,
          showCounter = _a.showCounter,
          maxLength = _a.maxLength,
          placeholder = _a.placeholder,
          rows = _a.rows,
          value = _a.value,
          defaultValue = _a.defaultValue,
          onChange = _a.onChange,
          others = __rest(_a, ["className", "children", "showCounter", "maxLength", "placeholder", "rows", "value", "defaultValue", "onChange"]);

      var cls = classNames(_defineProperty({
        'weui-textarea': true
      }, className, className));
      return /*#__PURE__*/React.createElement("div", null, value ? /*#__PURE__*/React.createElement("textarea", _extends({
        className: cls,
        maxLength: maxLength,
        placeholder: placeholder,
        defaultValue: defaultValue,
        value: value || '',
        onChange: this.handleChange.bind(this),
        rows: rows || 3
      }, others), children) : /*#__PURE__*/React.createElement("textarea", _extends({
        className: cls,
        maxLength: maxLength,
        placeholder: placeholder,
        defaultValue: defaultValue,
        onChange: this.handleChange.bind(this),
        rows: rows || 3
      }, others), children), showCounter ? /*#__PURE__*/React.createElement("div", {
        className: "weui-textarea-counter"
      }, /*#__PURE__*/React.createElement("span", null, this.state.textCounter), maxLength ? '/' + maxLength : false) : false);
    }
  }]);

  return TextArea;
}(React.Component);

export { TextArea as default };
TextArea.propTypes = {
  /**
   * display word counter
   *
   */
  showCounter: PropTypes.bool,

  /**
   * max character allow for textarea
   *
   */
  maxLength: PropTypes.number,
  defaultValue: PropTypes.string
};
TextArea.defaultProps = {
  showCounter: true,
  defaultValue: undefined
};
;