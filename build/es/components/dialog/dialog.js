import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
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

var Dialog = /*#__PURE__*/function (_React$Component) {
  _inherits(Dialog, _React$Component);

  var _super = _createSuper(Dialog);

  function Dialog(props) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _super.call(this, props);
    _this.state = {
      isAndroid: ''
    };
    return _this;
  }

  _createClass(Dialog, [{
    key: "renderButtons",
    value: function renderButtons() {
      return this.props.buttons.map(function (action, idx) {
        var type = action.type,
            label = action.label,
            others = __rest(action, ["type", "label"]);

        var className = classNames({
          'weui-dialog__btn': true,
          'weui-dialog__btn_default': type === 'default',
          'weui-dialog__btn_primary': type === 'primary'
        });
        return /*#__PURE__*/React.createElement("a", _extends({
          key: idx,
          href: "#!"
        }, others, {
          className: className
        }), label);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          title = _a.title,
          show = _a.show,
          className = _a.className,
          children = _a.children,
          buttons = _a.buttons,
          type = _a.type,
          autoDectect = _a.autoDectect,
          others = __rest(_a, ["title", "show", "className", "children", "buttons", "type", "autoDectect"]);

      var styleType = type ? type : 'ios';
      var cls = classNames('weui-dialog', _defineProperty({
        'weui-skin_android': styleType === 'android'
      }, className, className));
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: show ? 'block' : 'none'
        }
      }, /*#__PURE__*/React.createElement(Mask, null), /*#__PURE__*/React.createElement("div", _extends({
        className: cls
      }, others), title ? /*#__PURE__*/React.createElement("div", {
        className: "weui-dialog__hd"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "weui-dialog__title"
      }, title)) : false, /*#__PURE__*/React.createElement("div", {
        className: "weui-dialog__bd"
      }, children), /*#__PURE__*/React.createElement("div", {
        className: "weui-dialog__ft"
      }, this.renderButtons())));
    }
  }]);

  return Dialog;
}(React.Component);

Dialog.propTypes = {
  /**
   * Object Arrays of buttons, `label` property is require
   *
   */
  buttons: PropTypes.array,

  /**
   * to display the dialog
   *
   */
  show: PropTypes.bool,

  /**
   * Title of dialog
   *
   */
  title: PropTypes.string,

  /**
   * Specify display style: ios/android, default is ios when autoDetect not on
   *
   */
  type: PropTypes.string
};
Dialog.defaultProps = {
  buttons: [],
  show: false,
  title: '',
  type: ''
};
export default Dialog;