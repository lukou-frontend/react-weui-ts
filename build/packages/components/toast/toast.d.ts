import * as React from 'react';
import PropTypes from 'prop-types';
import { SizeType } from '../icon/index';
/**
 *  pop out indicator to inform users
 *
 */
interface ToastProps {
    className?: string;
    show: boolean;
    iconSize?: SizeType;
    [key: string]: any;
}
declare class Toast extends React.Component<ToastProps> {
    static propTypes: {
        /**
         * Icon Value
         *
         */
        icon: PropTypes.Requireable<string>;
        /**
         * Icon Size
         *
         */
        iconSize: PropTypes.Requireable<string>;
        /**
         * display toast
         *
         */
        show: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        icon: string;
        show: boolean;
    };
    render(): JSX.Element;
}
export default Toast;
