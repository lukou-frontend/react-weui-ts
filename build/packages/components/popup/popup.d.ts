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
    onRequestClose?: () => void;
}
declare class Popup extends React.Component<PopupProps> {
    static propTypes: {
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
    static defaultProps: {
        show: boolean;
        enableMask: boolean;
    };
    render(): JSX.Element;
}
export default Popup;
