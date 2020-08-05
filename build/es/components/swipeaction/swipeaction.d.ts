import * as React from 'react';
import PropTypes from 'prop-types';
import { SwipeActionPropsType } from './PropsType';
import './swipeaction.less';
export interface SwipeActionProps extends SwipeActionPropsType<React.CSSProperties> {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare function SwipeAction(props: SwipeActionProps): JSX.Element;
declare namespace SwipeAction {
    var propTypes: {
        /**
         * swipeout 样式
         */
        style: PropTypes.Requireable<object>;
        /**
         * 点击按钮后自动隐藏按钮
         */
        autoClose: PropTypes.Requireable<boolean>;
        /**
         * 左侧按钮组
         */
        left: PropTypes.Requireable<any[]>;
        /**
         * 右侧按钮组
         */
        right: PropTypes.Requireable<any[]>;
        /**
         * 打开时回调函数
         */
        onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 禁用 swipeout
         */
        disabled: PropTypes.Requireable<boolean>;
        /**
         * 关闭时回调函数
         */
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        prefixCls: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        prefixCls: string;
        autoClose: boolean;
        disabled: boolean;
        left: never[];
        right: never[];
        onOpen(): void;
        onClose(): void;
    };
}
export default SwipeAction;
