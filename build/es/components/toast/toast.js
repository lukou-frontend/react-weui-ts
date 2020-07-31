import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";

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
import Icon from '../icon/index';

var Toast = /*#__PURE__*/function (_React$Component) {
  _inherits(Toast, _React$Component);

  var _super = _createSuper(Toast);

  function Toast() {
    _classCallCheck(this, Toast);

    return _super.apply(this, arguments);
  }

  _createClass(Toast, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          _a$className = _a.className,
          className = _a$className === void 0 ? '' : _a$className,
          icon = _a.icon,
          show = _a.show,
          children = _a.children,
          iconSize = _a.iconSize,
          others = __rest(_a, ["className", "icon", "show", "children", "iconSize"]);

      var cls = classNames('weui-toast', _defineProperty({}, className, className));
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: show ? 'block' : 'none'
        }
      }, /*#__PURE__*/React.createElement(Mask, {
        transparent: true
      }), /*#__PURE__*/React.createElement("div", _extends({
        className: cls
      }, others), /*#__PURE__*/React.createElement(Icon, {
        value: icon,
        size: iconSize,
        className: "weui-icon_toast"
      }), /*#__PURE__*/React.createElement("p", {
        className: "weui-toast_content"
      }, children)));
    }
  }]);

  return Toast;
}(React.Component);

Toast.propTypes = {
  /**
   * Icon Value
   *
   */
  icon: PropTypes.string,

  /**
   * Icon Size
   *
   */
  iconSize: PropTypes.string,

  /**
   * display toast
   *
   */
  show: PropTypes.bool
};
Toast.defaultProps = {
  icon: 'toast',
  show: false
};
export default Toast;