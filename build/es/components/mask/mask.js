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
import classNames from '../../utils/classnames';

function Mask(props) {
  var transparent = props.transparent,
      className = props.className,
      others = __rest(props, ["transparent", "className"]);

  var clz = classNames({
    'weui-mask': !transparent,
    'weui-mask_transparent': transparent
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: clz
  }, others));
}

Mask.defaultProps = {
  transparent: false
};
export default Mask;