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

import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import TabBarIcon from './tabbar_icon';
import TabBarLabel from './tabbar_label';
export default function TabBarItem(props) {
  var children = props.children,
      className = props.className,
      active = props.active,
      icon = props.icon,
      label = props.label,
      others = __rest(props, ["children", "className", "active", "icon", "label"]);

  var cls = classNames({
    'weui-tabbar__item': true,
    'weui-bar__item_on': active
  }, className);

  if (icon || label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: cls
    }, others), icon ? /*#__PURE__*/React.createElement(TabBarIcon, null, icon) : false, label ? /*#__PURE__*/React.createElement(TabBarLabel, null, label) : false);
  }

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, others), children);
}
TabBarItem.propTypes = {
  /**
   * indicate currently active
   *
   */
  active: PropTypes.bool,

  /**
   * icon of item
   *
   */
  icon: PropTypes.any,

  /**
   * label of item
   *
   */
  label: PropTypes.string
};
TabBarItem.defaultProps = {
  active: false,
  icon: false,
  label: ''
};