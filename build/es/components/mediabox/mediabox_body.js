import _extends from "@babel/runtime/helpers/extends";

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
/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 18:05:53
 */


import * as React from 'react';
import classNames from '../../utils/classnames';
export default function PanelBody(props) {
  var children = props.children,
      className = props.className,
      others = __rest(props, ["children", "className"]);

  var cls = classNames({
    'weui-media-box__bd': true
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, others), children);
}