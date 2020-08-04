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

var PanelFooter = /*#__PURE__*/function (_React$Component) {
  _inherits(PanelFooter, _React$Component);

  var _super = _createSuper(PanelFooter);

  function PanelFooter() {
    _classCallCheck(this, PanelFooter);

    return _super.apply(this, arguments);
  }

  _createClass(PanelFooter, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          children = _a.children,
          others = __rest(_a, ["className", "children"]);

      var Component = this.props.href ? 'a' : 'div';
      var cls = classNames(_defineProperty({
        'weui-panel__ft': true
      }, className, className));
      return /*#__PURE__*/React.createElement(Component, _extends({
        className: cls
      }, others), children);
    }
  }]);

  return PanelFooter;
}(React.Component);

export { PanelFooter as default };
;