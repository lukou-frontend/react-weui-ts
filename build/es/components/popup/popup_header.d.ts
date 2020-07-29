/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 *  Sample Popup header for Popup
 *
 */
interface PopupHeaderProps {
    left: string;
    right: string;
    leftOnClick: () => void;
    rightOnClick: () => void;
    className?: any;
}
declare const PopupHeader: {
    (props: PopupHeaderProps): JSX.Element;
    propTypes: {
        /**
         * left button label
         *
         */
        left: PropTypes.Requireable<string>;
        /**
         * right button label
         *
         */
        right: PropTypes.Requireable<string>;
        /**
         * left button onclick
         *
         */
        leftOnClick: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * right button onclick
         *
         */
        rightOnClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        left: string;
        right: string;
    };
};
export default PopupHeader;
