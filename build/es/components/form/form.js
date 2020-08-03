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

var Form = /*#__PURE__*/function (_React$Component) {
  _inherits(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form() {
    _classCallCheck(this, Form);

    return _super.apply(this, arguments);
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          className = _a.className,
          radio = _a.radio,
          checkbox = _a.checkbox,
          others = __rest(_a, ["children", "className", "radio", "checkbox"]);

      var cls = classNames(_defineProperty({
        'weui-cells': true,
        'weui-cells_form': !radio && !checkbox,
        'weui-cells_radio': radio,
        'weui-cells_checkbox': checkbox
      }, className, className));
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls
      }, others), children);
    }
  }]);

  return Form;
}(React.Component);

Form.propTypes = {
  /**
   * if this form is use for radios
   *
   */
  radio: PropTypes.bool,

  /**
   * if this form is use for checkbox
   *
   */
  checkbox: PropTypes.bool
};
Form.defaultProps = {
  radio: false,
  checkbox: false
};
;
export default Form;