import Swipeout from 'rc-swipeout';
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import { SwipeActionPropsType } from './PropsType';
import './swipeaction.less';

export interface SwipeActionProps
    extends SwipeActionPropsType<React.CSSProperties> {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

function SwipeAction(props: SwipeActionProps) {
    const {
        className,
        style,
        prefixCls,
        left = [],
        right = [],
        autoClose,
        disabled,
        onOpen,
        onClose,
        children,
    } = props;

    const wrapClass = classNames(prefixCls, className);

    return left.length || right.length ? (
        <div style={style} className={className}>
            <Swipeout
                prefixCls={prefixCls}
                left={left}
                right={right}
                autoClose={autoClose}
                disabled={disabled}
                onOpen={onOpen}
                onClose={onClose}
            >
                {children}
            </Swipeout>
        </div>
    ) : (
        <div style={style} className={wrapClass}>
            {children}
        </div>
    );
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
    prefixCls: PropTypes.string,
};

SwipeAction.defaultProps = {
    prefixCls: 'am-swipe',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() {},
    onClose() {},
};
export default SwipeAction;
