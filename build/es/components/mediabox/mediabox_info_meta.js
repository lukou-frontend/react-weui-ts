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
export default function MediaBoxInfoMeta(props) {
  var children = props.children,
      extra = props.extra,
      className = props.className,
      others = __rest(props, ["children", "extra", "className"]);

  var cls = classNames({
    'weui-media-box__info__meta': true,
    'weui-media-box__info__meta_extra': extra
  }, className);
  return /*#__PURE__*/React.createElement("li", _extends({
    className: cls
  }, others), children);
}
MediaBoxInfoMeta.propTypes = {
  /**
   * add left margin to indicate extra
   *
   */
  extra: PropTypes.bool
};
MediaBoxInfoMeta.defaultProps = {
  extra: false
};