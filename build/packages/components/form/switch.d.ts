import * as React from 'react';
import PropTypes from 'prop-types';
import './switch.less';
/**
 * weui switch style for checkbox
 *
 */
declare type SwitchChangeEventHandler = (checked: boolean | undefined, event: React.ChangeEvent<HTMLInputElement>) => void;
interface SwitchProps {
    className?: string;
    checked?: boolean;
    size: 'default' | 'small';
    onChange: SwitchChangeEventHandler;
}
declare const Switch: {
    (props: SwitchProps): JSX.Element;
    propTypes: {
        /**
         * input选择框的class
         *
         */
        className: PropTypes.Requireable<string>;
        /**
         * 指定当前是否选中
         *
         */
        checked: PropTypes.Requireable<boolean>;
        /**
         * 开关大小，可选值：default small
         *
         */
        size: PropTypes.Requireable<string>;
        /**
         * 变化时回调函数，function(checked: boolean, event: Event)
         *
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        checked: boolean;
        size: "small" | "default";
    };
};
export default Switch;
