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
import './toptips.less';

var Toptips = function Toptips(props) {
  var _classNames;

  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      type = props.type,
      children = props.children,
      show = props.show,
      others = __rest(props, ["className", "type", "children", "show"]);

  var cls = classNames((_classNames = {
    'weui-toptips': true
  }, _defineProperty(_classNames, "weui-toptips_".concat(type), true), _defineProperty(_classNames, className, className), _classNames));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, others, {
    style: {
      display: show ? 'block' : 'none'
    }
  }), children);
};

Toptips.propTypes = {
  /**
   * display tips
   *
   */
  show: PropTypes.bool,

  /**
   * type: `default`, `warn`, `info`, `primary`
   */
  type: PropTypes.string
};
Toptips.defaultProps = {
  show: false,
  type: 'default'
};
export default Toptips;