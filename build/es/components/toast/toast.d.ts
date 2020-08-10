/// <reference types="react" />
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
declare function Toast(props: ToastProps): JSX.Element;
declare namespace Toast {
    var propTypes: {
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
    var defaultProps: {
        icon: string;
        show: boolean;
    };
}
export default Toast;
