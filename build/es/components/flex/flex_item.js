import _extends from "@babel/runtime/helpers/extends";

//1.0.0 components
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

var FlexItem = function FlexItem(props) {
  var component = props.component,
      children = props.children,
      others = __rest(props, ["component", "children"]);

  var Component = component;
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: "weui-flex__item"
  }, others), children);
};

FlexItem.propTypes = {
  /**
   * pass component to replace the component but maintaing style
   *
   */
  component: PropTypes.node
};
FlexItem.defaultProps = {
  component: 'div'
};
export default FlexItem;