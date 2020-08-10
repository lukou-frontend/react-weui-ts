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
export default function Checkbox(props) {
  var className = props.className,
      checked = props.checked,
      name = props.name,
      value = props.value,
      disabled = props.disabled,
      onChange = props.onChange,
      others = __rest(props, ["className", "checked", "name", "value", "disabled", "onChange"]);

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