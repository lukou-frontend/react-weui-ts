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
import GridIcon from './grid_icon';
import GridLabel from './grid_label';
export default function Grid(props) {
  var children = props.children,
      icon = props.icon,
      label = props.label,
      className = props.className,
      component = props.component,
      others = __rest(props, ["children", "icon", "label", "className", "component"]);

  var cls = classNames({
    'weui-grid': true
  }, className);
  var DefaultComponent = 'a';
  var GridComponent = component || DefaultComponent;
  return /*#__PURE__*/React.createElement(GridComponent, _extends({
    className: cls
  }, others), icon ? /*#__PURE__*/React.createElement(GridIcon, null, icon) : false, children, label ? /*#__PURE__*/React.createElement(GridLabel, null, label) : false);
}
Grid.propTypes = {
  /**
   * Label string for grid
   *
   */
  label: PropTypes.string,

  /**
   * Icon placeholder
   *
   */
  icon: PropTypes.any,

  /**
   * pass in an component to replace Grid but apply same style
   */
  component: PropTypes.func
};
Grid.defaultProps = {
  label: '',
  icon: false
};