import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

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
export default function FormCell(props) {
  var className = props.className,
      children = props.children,
      radio = props.radio,
      checkbox = props.checkbox,
      vcode = props.vcode,
      warn = props.warn,
      select = props.select,
      selectPos = props.selectPos,
      others = __rest(props, ["className", "children", "radio", "checkbox", "vcode", "warn", "select", "selectPos"]);

  var cellDomProps = _extends({}, others);

  delete cellDomProps["switch"];
  var cls = classNames(_defineProperty({
    'weui-cell': true,
    'weui-cell_vcode': vcode,
    'weui-cell_warn': warn,
    'weui-cell_switch': props["switch"],
    'weui-cell_select': select,
    'weui-cell_select-before': selectPos === 'before',
    'weui-cell_select-after': selectPos === 'after',
    'weui-check__label': radio || checkbox
  }, className, className));

  if (radio || checkbox) {
    return /*#__PURE__*/React.createElement("label", _extends({
      className: cls
    }, cellDomProps), children);
  }

  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, cellDomProps), children);
}
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
  "switch": PropTypes.bool,

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