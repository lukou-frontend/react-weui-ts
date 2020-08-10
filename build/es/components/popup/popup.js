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
import Mask from '../mask/index';
import './popup.less';

function Popup(props) {
  var className = props.className,
      children = props.children,
      show = props.show,
      onRequestClose = props.onRequestClose,
      enableMask = props.enableMask,
      others = __rest(props, ["className", "children", "show", "onRequestClose", "enableMask"]);

  var cls = classNames('weui-popup', {
    'weui-popup_toggle': show
  }, className);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mask, {
    transparent: enableMask,
    style: {
      display: show ? 'block' : 'none'
    },
    onClick: onRequestClose
  }), /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, others), children));
}

Popup.propTypes = {
  /**
   * display the component
   *
   */
  show: PropTypes.bool,

  /**
   * show mask
   *
   */
  enableMask: PropTypes.bool
};
Popup.defaultProps = {
  show: false,
  enableMask: false
};
export default Popup;