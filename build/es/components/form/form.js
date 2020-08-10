import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

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

function Form(props) {
  var children = props.children,
      className = props.className,
      radio = props.radio,
      checkbox = props.checkbox,
      others = __rest(props, ["children", "className", "radio", "checkbox"]);

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
export default Form;