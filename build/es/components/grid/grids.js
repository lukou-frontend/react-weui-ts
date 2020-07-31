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
import Grid from './grid';

var Grids = /*#__PURE__*/function (_React$Component) {
  _inherits(Grids, _React$Component);

  var _super = _createSuper(Grids);

  function Grids() {
    _classCallCheck(this, Grids);

    return _super.apply(this, arguments);
  }

  _createClass(Grids, [{
    key: "renderData",
    value: function renderData(data) {
      return data.map(function (item, i) {
        return /*#__PURE__*/React.createElement(Grid, _extends({
          key: i,
          icon: item.icon,
          label: item.label
        }, item));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          data = _a.data,
          className = _a.className,
          others = __rest(_a, ["children", "data", "className"]);

      var cls = classNames({
        'weui-grids': true
      }, className);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: cls
      }, others), data.length > 0 ? this.renderData(data) : children);
    }
  }]);

  return Grids;
}(React.Component);

export { Grids as default };
Grids.propTypes = {
  /**
   * Automatic grids, contain Array of Objects for grid, Optional `icon` and `label` property for each object
   *
   */
  data: PropTypes.array
};
Grids.defaultProps = {
  data: []
};
;