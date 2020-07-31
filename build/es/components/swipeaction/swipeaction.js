import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";
import classNames from '../../utils/classnames';
import Swipeout from 'rc-swipeout';
import * as React from 'react';
import PropTypes from 'prop-types';
import './swipeaction.less';

var SwipeAction = /*#__PURE__*/function (_React$Component) {
  _inherits(SwipeAction, _React$Component);

  var _super = _createSuper(SwipeAction);

  function SwipeAction() {
    _classCallCheck(this, SwipeAction);

    return _super.apply(this, arguments);
  }

  _createClass(SwipeAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          prefixCls = _this$props.prefixCls,
          _this$props$left = _this$props.left,
          left = _this$props$left === void 0 ? [] : _this$props$left,
          _this$props$right = _this$props.right,
          right = _this$props$right === void 0 ? [] : _this$props$right,
          autoClose = _this$props.autoClose,
          disabled = _this$props.disabled,
          onOpen = _this$props.onOpen,
          onClose = _this$props.onClose,
          children = _this$props.children;
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
  }]);

  return SwipeAction;
}(React.Component);

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
  onClose: PropTypes.func
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