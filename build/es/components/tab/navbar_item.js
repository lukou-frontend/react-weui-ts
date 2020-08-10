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
export default function NavBarItem(props) {
  var children = props.children,
      className = props.className,
      active = props.active,
      label = props.label,
      others = __rest(props, ["children", "className", "active", "label"]);

  var cls = classNames({
    'weui-navbar__item': true,
    'weui-bar__item_on': active
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, others), label || children);
}
NavBarItem.propTypes = {
  /**
   * indicate tab is active
   *
   */
  active: PropTypes.bool,

  /**
   * label of the item
   *
   */
  label: PropTypes.string
};
NavBarItem.defaultProps = {
  active: false
};