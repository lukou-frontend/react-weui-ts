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

var Input = function Input(props) {
  var className = props.className,
      maxLength = props.maxLength,
      value = props.value,
      placeholder = props.placeholder,
      onChange = props.onChange,
      others = __rest(props, ["className", "maxLength", "value", "placeholder", "onChange"]);

  var cls = classNames(_defineProperty({
    'weui-input': true
  }, className, className));
  return /*#__PURE__*/React.createElement("div", null, value ? /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    maxLength: maxLength,
    placeholder: placeholder,
    value: value || '',
    onChange: onChange
  }, others)) : /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    maxLength: maxLength,
    placeholder: placeholder,
    onChange: onChange
  }, others)), /*#__PURE__*/React.createElement("span", {
    className: "weui-icon-checked"
  }));
};

Input.propTypes = {
  defaultValue: PropTypes.string
};
Input.defaultProps = {
  defaultValue: undefined
};
export default Input;