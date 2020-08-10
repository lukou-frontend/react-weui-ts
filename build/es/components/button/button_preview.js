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

var PreviewButton = function PreviewButton(props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      primary = props.primary,
      children = props.children,
      others = __rest(props, ["className", "primary", "children"]);

  var cls = classNames(_defineProperty({
    'weui-form-preview__btn': true,
    'weui-form-preview__btn_default': !primary,
    'weui-form-preview__btn_primary': primary
  }, className, className));
  return /*#__PURE__*/React.createElement("a", _extends({
    className: cls
  }, others), children);
};

PreviewButton.propTypes = {
  /**
   * 默认default，可选：true false
   *
   */
  primary: PropTypes.bool
};
PreviewButton.defaultProps = {
  primary: false
};
export default PreviewButton;