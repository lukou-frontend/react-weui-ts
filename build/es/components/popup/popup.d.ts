import * as React from 'react';
import PropTypes from 'prop-types';
import './popup.less';
/**
 *  An Popup modal from bottom
 *
 */
interface PopupProps {
    enableMask: boolean;
    show: boolean;
    className?: any;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onRequestClose?: () => void;
}
declare function Popup(props: PopupProps): JSX.Element;
declare namespace Popup {
    var propTypes: {
        /**
         * display the component
         *
         */
        show: PropTypes.Requireable<boolean>;
        /**
         * show mask
         *
         */
        enableMask: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        show: boolean;
        enableMask: boolean;
    };
}
export default Popup;
