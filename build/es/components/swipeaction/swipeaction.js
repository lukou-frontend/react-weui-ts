import Swipeout from 'rc-swipeout';
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './swipeaction.less';

function SwipeAction(props) {
  var className = props.className,
      style = props.style,
      prefixCls = props.prefixCls,
      _props$left = props.left,
      left = _props$left === void 0 ? [] : _props$left,
      _props$right = props.right,
      right = _props$right === void 0 ? [] : _props$right,
      autoClose = props.autoClose,
      disabled = props.disabled,
      onOpen = props.onOpen,
      onClose = props.onClose,
      children = props.children;
  var wrapClass = classNames(prefixCls, className);
  return left.length || right.length ? /*#__PURE__*/React.createElement("div", {
    style: style,
    className: className
  }, /*#__PURE__*/React.createElement(Swipeout, {
    prefixCls: prefixCls,
    left: left,
    right: right,
    autoClose: autoClose,
    disabled: disabled,
    onOpen: onOpen,
    onClose: onClose
  }, children)) : /*#__PURE__*/React.createElement("div", {
    style: style,
    className: wrapClass
  }, children);
}

SwipeAction.propTypes = {
  /**
   * swipeout 样式
   */
  style: PropTypes.object,

  /**
   * 点击按钮后自动隐藏按钮
   */
  autoClose: PropTypes.bool,

  /**
   * 左侧按钮组
   */
  left: PropTypes.array,

  /**
   * 右侧按钮组
   */
  right: PropTypes.array,

  /**
   * 打开时回调函数
   */
  onOpen: PropTypes.func,

  /**
   * 禁用 swipeout
   */
  disabled: PropTypes.bool,

  /**
   * 关闭时回调函数
   */
  onClose: PropTypes.func,
  prefixCls: PropTypes.string
};
SwipeAction.defaultProps = {
  prefixCls: 'am-swipe',
  autoClose: false,
  disabled: false,
  left: [],
  right: [],
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};
export default SwipeAction;