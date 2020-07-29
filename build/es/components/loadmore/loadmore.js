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
 * @LastEditTime: 2020-07-16 18:04:26
 */


import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Icon from '../icon';

var LoadMore = function LoadMore(props) {
  var className = props.className,
      children = props.children,
      loading = props.loading,
      showLine = props.showLine,
      showDot = props.showDot,
      others = __rest(props, ["className", "children", "loading", "showLine", "showDot"]);

  var cls = classNames(_defineProperty({
    'weui-loadmore': true,
    'weui-loadmore_line': showLine,
    'weui-loadmore_dot': showDot
  }, className, className));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, others), loading ? /*#__PURE__*/React.createElement(Icon, {
    value: "loading"
  }) : false, /*#__PURE__*/React.createElement("span", {
    className: "weui-loadmore__tips"
  }, children));
};

LoadMore.propTypes = {
  /**
   * display laoding spinner
   *
   */
  loading: PropTypes.bool,

  /**
   * display side lines
   *
   */
  showLine: PropTypes.bool,

  /**
   * display dot in the center
   *
   */
  showDot: PropTypes.bool
};
LoadMore.defaultProps = {
  loading: false,
  showLine: false,
  showDot: false
};
export default LoadMore;