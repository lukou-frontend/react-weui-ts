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
import classNames from '../../utils/classnames';
export default function Button(props) {
  var component = props.component,
      type = props.type,
      size = props.size,
      plain = props.plain,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      children = props.children,
      others = __rest(props, ["component", "type", "size", "plain", "className", "children"]);

  var Component = component || (props.href || type === 'vcode' ? 'a' : 'button');
  var cls = type === 'vcode' ? classNames('weui-vcode-btn', _defineProperty({}, className, className)) : classNames(_defineProperty({
    'weui-btn': true,
    'weui-btn_mini': size === 'small',
    'weui-btn_primary': type === 'primary' && !plain,
    'weui-btn_default': type === 'default' && !plain,
    'weui-btn_warn': type === 'warn',
    'weui-btn_plain-primary': type === 'primary' && plain,
    'weui-btn_plain-default': type === 'default' && plain,
    'weui-btn_disabled': props.disabled && !plain,
    'weui-btn_plain-disabled': props.disabled && plain
  }, className, className));
  return /*#__PURE__*/React.createElement(Component, _extends({}, others, {
    className: cls
  }), children);
}
Button.defaultProps = {
  disabled: false,
  type: 'primary',
  size: 'normal'
};