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
/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 18:05:53
 */


import * as React from 'react';
import classNames from '../../utils/classnames';

var PanelBody = /*#__PURE__*/function (_React$Component) {
  _inherits(PanelBody, _React$Component);

  var _super = _createSuper(PanelBody);

  function PanelBody() {
    _classCallCheck(this, PanelBody);

    return _super.apply(this, arguments);
  }

  _createClass(PanelBody, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          className = _a.className,
          others = __rest(_a, ["children", "className"]);

      var cls = classNames({
        'weui-media-box__bd': true
      }, className);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls
      }, others), children);
    }
  }]);

  return PanelBody;
}(React.Component);

export { PanelBody as default };
;