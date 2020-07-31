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
import Icon from '../icon';

var Progress = function Progress(props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      showCancel = props.showCancel,
      value = props.value,
      _onClick = props.onClick,
      others = __rest(props, ["className", "showCancel", "value", "onClick"]);

  var cls = classNames(_defineProperty({
    'weui-progress': true
  }, className, className));
  var pgWdith = value > 100 ? 100 : value < 0 ? 0 : value;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, others), /*#__PURE__*/React.createElement("div", {
    className: "weui-progress__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "weui-progress__inner-bar",
    style: {
      width: "".concat(pgWdith, "%")
    }
  })), showCancel ? /*#__PURE__*/React.createElement("a", {
    href: "javascript:;",
    className: "weui-progress__opr",
    onClick: function onClick(e) {
      if (_onClick) _onClick(e);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    value: "cancel"
  })) : false);
};

Progress.propTypes = {
  /**
   * value of the bar
   *
   */
  value: PropTypes.number,

  /**
   * enable cancel button
   *
   */
  showCancel: PropTypes.bool
};
Progress.defaultProps = {
  value: 0,
  showCancel: true
};
export default Progress;