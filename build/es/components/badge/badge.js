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
var presetStyles = {
  "default": {},
  header: {
    position: 'absolute',
    top: '-.4em',
    right: '-.4em'
  },
  body: {
    marginLeft: '5px'
  },
  footer: {
    marginLeft: '5px',
    marginRight: '5px'
  }
};

function Badge(props) {
  var children = props.children,
      className = props.className,
      dot = props.dot,
      style = props.style,
      _props$preset = props.preset,
      preset = _props$preset === void 0 ? 'default' : _props$preset,
      domProps = __rest(props, ["children", "className", "dot", "style", "preset"]);

  var clz = classNames('weui-badge', {
    'weui-badge_dot': dot
  }, className);

  var stylez = _extends(_extends({}, presetStyles[preset]), style);

  return /*#__PURE__*/React.createElement("span", _extends({
    className: clz,
    style: stylez
  }, domProps), children);
}

Badge.propTypes = {
  /**
   * display dot style without content
   *
   */
  dot: PropTypes.bool,

  /**
   * some preset layout for other UI elements, include 'header', 'body', 'footer'
   *
   */
  preset: PropTypes.string
};
Badge.defaultProps = {
  dot: false,
  preset: 'default'
};
export default Badge;