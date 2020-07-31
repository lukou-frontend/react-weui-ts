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
import './touch_fix.less';

var FormCell = /*#__PURE__*/function (_React$Component) {
  _inherits(FormCell, _React$Component);

  var _super = _createSuper(FormCell);

  function FormCell() {
    _classCallCheck(this, FormCell);

    return _super.apply(this, arguments);
  }

  _createClass(FormCell, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          children = _a.children,
          radio = _a.radio,
          checkbox = _a.checkbox,
          vcode = _a.vcode,
          warn = _a.warn,
          select = _a.select,
          selectPos = _a.selectPos,
          others = __rest(_a, ["className", "children", "radio", "checkbox", "vcode", "warn", "select", "selectPos"]);

      var cellDomProps = _extends({}, others);

      delete cellDomProps["switch"];
      var cls = classNames(_defineProperty({
        'weui-cell': true,
        'weui-cell_vcode': vcode,
        'weui-cell_warn': warn,
        'weui-cell_switch': this.props["switch"],
        'weui-cell_select': select,
        'weui-cell_select-before': selectPos === 'before',
        'weui-cell_select-after': selectPos === 'after',
        'weui-check__label': radio || checkbox
      }, className, className));

      if (radio || checkbox) {
        return /*#__PURE__*/React.createElement("label", _extends({
          className: cls
        }, cellDomProps), children);
      } else {
        return /*#__PURE__*/React.createElement("div", _extends({
          className: cls
        }, cellDomProps), children);
      }
    }
  }]);

  return FormCell;
}(React.Component);

export { FormCell as default };
FormCell.propTypes = {
  /**
   * if cell use for vcode
   *
   */
  vcode: PropTypes.bool,

  /**
   * display warn style of cell
   *
   */
  warn: PropTypes.bool,

  /**
   * if cell use for radio
   *
   */
  radio: PropTypes.bool,

  /**
   * if cell use for checkbox
   *
   */
  checkbox: PropTypes.bool,

  /**
   * if cell use for switch checkbox
   *
   */
  'switch': PropTypes.bool,

  /**
   * if cell use for select
   *
   */
  select: PropTypes.bool,

  /**
   * select position, options: before, after
   *
   */
  selectPos: PropTypes.string
};
FormCell.defaultProps = {
  vcode: false,
  warn: false,
  radio: false,
  checkbox: false,
  select: false,
  "switch": false,
  selectPos: undefined
};
;