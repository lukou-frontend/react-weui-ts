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
import classNames from '../../utils/classnames';

var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          component = _a.component,
          type = _a.type,
          size = _a.size,
          plain = _a.plain,
          _a$className = _a.className,
          className = _a$className === void 0 ? '' : _a$className,
          children = _a.children,
          others = __rest(_a, ["component", "type", "size", "plain", "className", "children"]);

      var Component = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
      var cls = type === 'vcode' ? classNames('weui-vcode-btn', _defineProperty({}, className, className)) : classNames(_defineProperty({
        'weui-btn': true,
        'weui-btn_mini': size === 'small',
        'weui-btn_primary': type === 'primary' && !plain,
        'weui-btn_default': type === 'default' && !plain,
        'weui-btn_warn': type === 'warn',
        'weui-btn_plain-primary': type === 'primary' && plain,
        'weui-btn_plain-default': type === 'default' && plain,
        'weui-btn_disabled': this.props.disabled && !plain,
        'weui-btn_plain-disabled': this.props.disabled && plain
      }, className, className));
      return /*#__PURE__*/React.createElement(Component, _extends({}, others, {
        className: cls
      }), children);
    }
  }]);

  return Button;
}(React.Component);

export { Button as default };
Button.defaultProps = {
  disabled: false,
  type: 'primary',
  size: 'normal'
};
;