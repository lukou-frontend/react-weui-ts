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
export default function MediaBox(props) {
  var children = props.children,
      type = props.type,
      className = props.className,
      others = __rest(props, ["children", "type", "className"]);

  var Component = props.href ? 'a' : 'div';
  var cls = classNames({
    'weui-media-box': true,
    'weui-media-box_appmsg': type === 'appmsg',
    'weui-media-box_text': type === 'text',
    'weui-media-box_small-appmsg': type === 'small_appmsg'
  }, className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: cls
  }, others), children);
}
MediaBox.propTypes = {
  /**
   * The layout of media box, Options: appmsg/text/small_appmsg
   *
   */
  type: PropTypes.string
};
MediaBox.defaultProps = {
  type: 'text'
};