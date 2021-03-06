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
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

var CellFooter = function CellFooter(props) {
  var className = props.className,
      children = props.children,
      primary = props.primary,
      others = __rest(props, ["className", "children", "primary"]);

  var cls = classNames(_defineProperty({
    'weui-cell__ft': true,
    'weui-cell_primary': primary
  }, className, className));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, others), children);
};

CellFooter.propTypes = {
  /**
   * if cell body is the primary block
   *
   */
  primary: PropTypes.bool
};
CellFooter.defaultProps = {
  primary: false
};
export default CellFooter;