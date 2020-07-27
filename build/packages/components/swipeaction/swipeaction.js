import classNames from '../../utils/classnames';
import Swipeout from 'rc-swipeout';
import * as React from 'react';
import PropTypes from 'prop-types';
import './swipeaction.less';
class SwipeAction extends React.Component {
    render() {
        const { className, style, prefixCls, left = [], right = [], autoClose, disabled, onOpen, onClose, children, } = this.props;
        const wrapClass = classNames(prefixCls, className);
        return left.length || right.length ? (React.createElement("div", { style: style, className: className },
            React.createElement(Swipeout, { prefixCls: prefixCls, left: left, right: right, autoClose: autoClose, disabled: disabled, onOpen: onOpen, onClose: onClose }, children))) : (React.createElement("div", { style: style, className: wrapClass }, children));
    }
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
};
SwipeAction.defaultProps = {
    prefixCls: 'am-swipe',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() { },
    onClose() { },
};
export default SwipeAction;
