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
 * @LastEditTime: 2020-08-03 14:30:18
 */


import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

var Cell = function Cell(props) {
  var className = props.className,
      children = props.children,
      access = props.access,
      href = props.href,
      link = props.link,
      component = props.component,
      htmlFor = props.htmlFor,
      onClick = props.onClick,
      others = __rest(props, ["className", "children", "access", "href", "link", "component", "htmlFor", "onClick"]);

  var DefaultComponent = href ? 'a' : htmlFor ? 'label' : 'div';
  var CellComponent = component ? component : DefaultComponent;
  var cls = classNames(_defineProperty({
    'weui-cell': true,
    'weui-cell_access': access,
    'weui-cell_link': link
  }, className, className));
  return /*#__PURE__*/React.createElement(CellComponent, _extends({
    className: cls,
    href: href,
    htmlFor: htmlFor,
    onClick: onClick
  }, others), children);
};

Cell.propTypes = {
  /**
   * if cell should have arrow or link
   *
   */
  access: PropTypes.bool,

  /**
   * if this cell body is link
   *
   */
  link: PropTypes.bool,

  /**
   * pass in an component to replace Cell but apply same style
   *
   */
  component: PropTypes.func
};
Cell.defaultProps = {
  access: false,
  link: false
};
export default Cell;