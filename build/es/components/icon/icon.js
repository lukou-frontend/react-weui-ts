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
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import deprecationWarning from '../../utils/deprecationWarning';
var deprecateValue = {
  'safe_success': 'safe-success',
  'safe_warn': 'safe-warn',
  'success_circle': 'success-circle',
  'success_no_circle': 'success-no-circle',
  'waiting_circle': 'waiting-circle',
  'info_circle': 'info-circle'
};

var Icon = /*#__PURE__*/function (_React$Component) {
  _inherits(Icon, _React$Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _a = this.props,
          value = _a.value,
          size = _a.size,
          className = _a.className,
          primary = _a.primary,
          others = __rest(_a, ["value", "size", "className", "primary"]);

      if (Object.keys(deprecateValue).indexOf(value) !== -1) {
        deprecationWarning("Icon ".concat(value), "Icon ".concat(deprecateValue[value]), null);
      }

      var cls = classNames((_classNames = {}, _defineProperty(_classNames, 'weui-icon-' + value, value !== 'loading'), _defineProperty(_classNames, 'weui-icon_msg', size === 'large' && !primary), _defineProperty(_classNames, 'weui-icon_msg-primary', size === 'large' && primary), _defineProperty(_classNames, 'weui-loading', value === 'loading'), _defineProperty(_classNames, className, className), _classNames));
      return /*#__PURE__*/React.createElement("i", _extends({}, others, {
        className: cls
      }));
    }
  }]);

  return Icon;
}(React.Component);

Icon.propTypes = {
  /**
   * types of [weui icons](https://github.com/weui/weui/wiki/Icon)
   *
   */
  value: PropTypes.string,

  /**
   * size of icon, options: small/large
   *
   */
  size: PropTypes.string
};
Icon.defaultProps = {
  value: 'success',
  size: 'small'
};
export default Icon;