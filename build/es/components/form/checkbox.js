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
import classNames from '../../utils/classnames';
import PropTypes from 'prop-types';

var Checkbox = /*#__PURE__*/function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  var _super = _createSuper(Checkbox);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    return _super.call(this, props);
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          checked = _a.checked,
          name = _a.name,
          value = _a.value,
          disabled = _a.disabled,
          onChange = _a.onChange,
          others = __rest(_a, ["className", "checked", "name", "value", "disabled", "onChange"]);

      var cls = classNames(_defineProperty({
        'weui-check': true
      }, className, className));

      var handleChange = function handleChange(e) {
        onChange && onChange(e.target.checked, e);
      };

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", _extends({
        disabled: disabled || false,
        name: name,
        value: value,
        checked: checked,
        className: cls,
        type: "checkbox"
      }, others, {
        onChange: handleChange
      })), /*#__PURE__*/React.createElement("span", {
        className: "weui-icon-checked"
      }));
    }
  }]);

  return Checkbox;
}(React.Component);

export { Checkbox as default };
Checkbox.propTypes = {
  /**
   * onChange事件回调函数，function(checked:boolean, event: Event)
   *
   */
  onChange: PropTypes.func
};
Checkbox.defaultProps = {
  onChange: undefined
};
;