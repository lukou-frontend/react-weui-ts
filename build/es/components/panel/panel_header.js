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

var PanelHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(PanelHeader, _React$Component);

  var _super = _createSuper(PanelHeader);

  function PanelHeader() {
    _classCallCheck(this, PanelHeader);

    return _super.apply(this, arguments);
  }

  _createClass(PanelHeader, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          children = _a.children,
          others = __rest(_a, ["className", "children"]);

      var cls = classNames(_defineProperty({
        'weui-panel__hd': true
      }, className, className));
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls
      }, others), children);
    }
  }]);

  return PanelHeader;
}(React.Component);

export { PanelHeader as default };
;