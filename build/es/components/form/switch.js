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
import './switch.less';

var Switch = function Switch(props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      checked = props.checked,
      size = props.size,
      onChange = props.onChange,
      others = __rest(props, ["className", "checked", "size", "onChange"]);

  var cls = classNames(_defineProperty({
    'weui-switch': true,
    'weui-switch-small': size === 'small'
  }, className, className));

  var inputProps = _extends({}, others);

  var handleChange = function handleChange(e) {
    onChange && onChange(e.target.checked, e);
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    type: "checkbox",
    checked: checked
  }, inputProps, {
    onChange: handleChange
  })), /*#__PURE__*/React.createElement("span", {
    className: "weui-icon-checked"
  }));
};

Switch.propTypes = {
  /**
   * input选择框的class
   *
   */
  className: PropTypes.string,

  /**
   * 指定当前是否选中
   *
   */
  checked: PropTypes.bool,

  /**
   * 开关大小，可选值：default small
   *
   */
  size: PropTypes.string,

  /**
   * 变化时回调函数，function(checked: boolean, event: Event)
   *
   */
  onChange: PropTypes.func
};
Switch.defaultProps = {
  checked: false,
  size: 'default'
};
export default Switch;