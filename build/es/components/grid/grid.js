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
import GridIcon from './grid_icon';
import GridLabel from './grid_label';

var Grid = /*#__PURE__*/function (_React$Component) {
  _inherits(Grid, _React$Component);

  var _super = _createSuper(Grid);

  function Grid() {
    _classCallCheck(this, Grid);

    return _super.apply(this, arguments);
  }

  _createClass(Grid, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          icon = _a.icon,
          label = _a.label,
          className = _a.className,
          component = _a.component,
          others = __rest(_a, ["children", "icon", "label", "className", "component"]);

      var cls = classNames({
        'weui-grid': true
      }, className);
      var DefaultComponent = 'a';
      var GridComponent = component ? component : DefaultComponent;
      return /*#__PURE__*/React.createElement(GridComponent, _extends({
        className: cls
      }, others), icon ? /*#__PURE__*/React.createElement(GridIcon, null, icon) : false, children, label ? /*#__PURE__*/React.createElement(GridLabel, null, label) : false);
    }
  }]);

  return Grid;
}(React.Component);

export { Grid as default };
Grid.propTypes = {
  /**
   * Label string for grid
   *
   */
  label: PropTypes.string,

  /**
   * Icon placeholder
   *
   */
  icon: PropTypes.any,

  /**
   * pass in an component to replace Grid but apply same style
   */
  component: PropTypes.func
};
Grid.defaultProps = {
  label: '',
  icon: false
};
;