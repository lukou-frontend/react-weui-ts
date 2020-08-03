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
import TabBarIcon from './tabbar_icon';
import TabBarLabel from './tabbar_label';

var TabBarItem = /*#__PURE__*/function (_React$Component) {
  _inherits(TabBarItem, _React$Component);

  var _super = _createSuper(TabBarItem);

  function TabBarItem() {
    _classCallCheck(this, TabBarItem);

    return _super.apply(this, arguments);
  }

  _createClass(TabBarItem, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          className = _a.className,
          active = _a.active,
          icon = _a.icon,
          label = _a.label,
          others = __rest(_a, ["children", "className", "active", "icon", "label"]);

      var cls = classNames({
        'weui-tabbar__item': true,
        'weui-bar__item_on': active
      }, className);

      if (icon || label) {
        return /*#__PURE__*/React.createElement("div", _extends({
          className: cls
        }, others), icon ? /*#__PURE__*/React.createElement(TabBarIcon, null, icon) : false, label ? /*#__PURE__*/React.createElement(TabBarLabel, null, label) : false);
      } else {
        return /*#__PURE__*/React.createElement("div", _extends({
          className: cls
        }, others), children);
      }
    }
  }]);

  return TabBarItem;
}(React.Component);

export { TabBarItem as default };
TabBarItem.propTypes = {
  /**
   * indicate currently active
   *
   */
  active: PropTypes.bool,

  /**
   * icon of item
   *
   */
  icon: PropTypes.any,

  /**
   * label of item
   *
   */
  label: PropTypes.string
};
TabBarItem.defaultProps = {
  active: false,
  icon: false,
  label: ''
};