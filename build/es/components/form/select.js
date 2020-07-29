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

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select() {
    _classCallCheck(this, Select);

    return _super.apply(this, arguments);
  }

  _createClass(Select, [{
    key: "renderData",
    value: function renderData(data) {
      return data.map(function (item, i) {
        var value = item.value,
            label = item.label,
            otherItem = __rest(item, ["value", "label"]);

        return /*#__PURE__*/React.createElement("option", _extends({
          key: i,
          value: value
        }, otherItem), label);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          data = _a.data,
          children = _a.children,
          others = __rest(_a, ["className", "data", "children"]);

      var cls = classNames(_defineProperty({
        'weui-select': true
      }, className, className));
      return /*#__PURE__*/React.createElement("select", _extends({
        className: cls
      }, others), data.length > 0 ? this.renderData(data) : children);
    }
  }]);

  return Select;
}(React.Component);

export { Select as default };
Select.propTypes = {
  /**
   * object arrays of options, `value` and `label` properties is required
   *
   */
  data: PropTypes.array
};
Select.defaultProps = {
  data: []
};
;