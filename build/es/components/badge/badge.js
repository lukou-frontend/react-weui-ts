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
var presetStyles = {
  'default': {},
  'header': {
    position: 'absolute',
    top: '-.4em',
    right: '-.4em'
  },
  'body': {
    marginLeft: '5px'
  },
  'footer': {
    marginLeft: '5px',
    marginRight: '5px'
  }
};

var Badge = /*#__PURE__*/function (_React$Component) {
  _inherits(Badge, _React$Component);

  var _super = _createSuper(Badge);

  function Badge() {
    _classCallCheck(this, Badge);

    return _super.apply(this, arguments);
  }

  _createClass(Badge, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          className = _a.className,
          dot = _a.dot,
          style = _a.style,
          preset = _a.preset,
          domProps = __rest(_a, ["children", "className", "dot", "style", "preset"]);

      var clz = classNames('weui-badge', {
        'weui-badge_dot': dot
      }, className);

      var stylez = _extends({}, presetStyles[preset], style);

      return /*#__PURE__*/React.createElement("span", _extends({
        className: clz,
        style: stylez
      }, domProps), children);
    }
  }]);

  return Badge;
}(React.Component);

Badge.propTypes = {
  /**
   * display dot style without content
   *
   */
  dot: PropTypes.bool,

  /**
   * some preset layout for other UI elements, include 'header', 'body', 'footer'
   *
   */
  preset: PropTypes.string
};
Badge.defaultProps = {
  dot: false,
  preset: 'default'
};
export default Badge;