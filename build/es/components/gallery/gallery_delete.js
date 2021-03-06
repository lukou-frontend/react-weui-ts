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
import classNames from '../../utils/classnames';
import Icon from '../icon';

var GalleryDelete = function GalleryDelete(props) {
  var className = props.className,
      onClick = props.onClick,
      others = __rest(props, ["className", "onClick"]);

  var cls = classNames(_defineProperty({
    'weui-gallery__del': true
  }, className, className));
  return /*#__PURE__*/React.createElement("a", _extends({
    className: cls
  }, others), /*#__PURE__*/React.createElement(Icon, {
    onClick: onClick,
    value: "delete",
    className: "weui-icon_gallery-delete"
  }));
};

export default GalleryDelete;