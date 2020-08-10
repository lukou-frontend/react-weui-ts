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
import { Button, ButtonArea } from '../button';
import { Footer, FooterLinks, FooterLink } from '../footer';
import Icon from '../icon/index';
import deprecationWarning from '../../utils/deprecationWarning';

var Msg = /*#__PURE__*/function (_React$Component) {
  _inherits(Msg, _React$Component);

  var _super = _createSuper(Msg);

  function Msg() {
    _classCallCheck(this, Msg);

    return _super.apply(this, arguments);
  }

  _createClass(Msg, [{
    key: "_renderButtons",
    value: function _renderButtons() {
      return this.props.buttons.map(function (button, idx) {
        var type = button.type,
            label = button.label,
            others = __rest(button, ["type", "label"]);

        return /*#__PURE__*/React.createElement(Button, _extends({
          key: idx
        }, others, {
          type: type
        }), label);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          className = _a.className,
          type = _a.type,
          title = _a.title,
          description = _a.description,
          extraHref = _a.extraHref,
          extraText = _a.extraText,
          footer = _a.footer,
          buttons = _a.buttons,
          others = __rest(_a, ["children", "className", "type", "title", "description", "extraHref", "extraText", "footer", "buttons"]);

      var cls = classNames('weui-msg', _defineProperty({}, className, className));

      var elFooter = footer || function () {
        return false;
      };

      if (!elFooter() && (extraHref || extraText)) {
        deprecationWarning('Msg extraHref/extraText', 'Msg footer', null);

        elFooter = function elFooter() {
          return /*#__PURE__*/React.createElement(Footer, null, /*#__PURE__*/React.createElement(FooterLinks, null, /*#__PURE__*/React.createElement(FooterLink, {
            href: extraHref
          }, extraText)));
        };
      }

      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls
      }, others), /*#__PURE__*/React.createElement("div", {
        className: "weui-msg__icon-area"
      }, /*#__PURE__*/React.createElement(Icon, {
        value: type,
        size: "large"
      })), /*#__PURE__*/React.createElement("div", {
        className: "weui-msg__text-area"
      }, title ? /*#__PURE__*/React.createElement("h2", {
        className: "weui-msg__title"
      }, title) : false, description ? /*#__PURE__*/React.createElement("p", {
        className: "weui-msg__desc"
      }, description) : false, children), /*#__PURE__*/React.createElement("div", {
        className: "weui-msg__opr-area"
      }, /*#__PURE__*/React.createElement(ButtonArea, null, this._renderButtons())), /*#__PURE__*/React.createElement("div", {
        className: "weui-msg__extra-area"
      }, elFooter()));
    }
  }]);

  return Msg;
}(React.Component);

export { Msg as default };
Msg.propTypes = {
  /**
   * Icon type
   *
   */
  type: PropTypes.string,

  /**
   * Object array of Buttons, require at least `label` property
   *
   */
  buttons: PropTypes.array,

  /**
   * Page Title
   *
   */
  title: PropTypes.string,

  /**
   * Page Description
   *
   */
  description: PropTypes.string,

  /**
   * deprecated property from 0.4.x
   *
   */
  extraHref: PropTypes.string,

  /**
   * deprecated property from 0.4.x
   *
   */
  extraText: PropTypes.string,

  /**
   * Footer Element of Page
   *
   */
  footer: PropTypes.any
};
Msg.defaultProps = {
  type: 'success',
  buttons: []
};