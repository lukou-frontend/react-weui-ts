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
/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 17:23:52
 */


import * as React from 'react';
import classNames from '../../utils/classnames';

var CellsTitle = function CellsTitle(props) {
  var className = props.className,
      children = props.children,
      others = __rest(props, ["className", "children"]);

  var cls = classNames(_defineProperty({
    'weui-cells__title': true
  }, className, className));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, others), children);
};

export default CellsTitle;