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
import deprecationWarning from '../../utils/deprecationWarning';
var deprecateValue = {
  safe_success: 'safe-success',
  safe_warn: 'safe-warn',
  success_circle: 'success-circle',
  success_no_circle: 'success-no-circle',
  waiting_circle: 'waiting-circle',
  info_circle: 'info-circle'
};

function Icon(props) {
  var _classNames;

  var value = props.value,
      size = props.size,
      className = props.className,
      primary = props.primary,
      others = __rest(props, ["value", "size", "className", "primary"]);

  if (Object.keys(deprecateValue).indexOf(value) !== -1) {
    deprecationWarning("Icon ".concat(value), "Icon ".concat(deprecateValue[value]), null);
  }

  var cls = classNames((_classNames = {}, _defineProperty(_classNames, "weui-icon-".concat(value), value !== 'loading'), _defineProperty(_classNames, 'weui-icon_msg', size === 'large' && !primary), _defineProperty(_classNames, 'weui-icon_msg-primary', size === 'large' && primary), _defineProperty(_classNames, 'weui-loading', value === 'loading'), _defineProperty(_classNames, className, className), _classNames));
  return /*#__PURE__*/React.createElement("i", _extends({}, others, {
    className: cls
  }));
}

Icon.propTypes = {
  /**
   * types of [weui icons](https://github.com/weui/weui/wiki/Icon)
   *
   */
  value: PropTypes.string,

  /**
   * size of icon, options: small/large
   *
   */
  size: PropTypes.string
};
Icon.defaultProps = {
  value: 'success',
  size: 'small'
};
export default Icon;