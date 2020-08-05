import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Mask from '../mask/index';
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
function Popup(props: PopupProps) {
    const {
        className,
        children,
        show,
        onRequestClose,
        enableMask,
        ...others
    } = props;
    const cls = classNames(
        'weui-popup',
        {
            'weui-popup_toggle': show,
        },
        className,
    );

    return (
        <div>
            <Mask
                transparent={enableMask}
                style={{ display: show ? 'block' : 'none' }}
                onClick={onRequestClose}
            />
            <div className={cls} {...others}>
                {children}
            </div>
        </div>
    );
}
Popup.propTypes = {
    /**
     * display the component
     *
     */
    show: PropTypes.bool,
    /**
     * show mask
     *
     */
    enableMask: PropTypes.bool,
};

Popup.defaultProps = {
    show: false,
    enableMask: false,
};
export default Popup;
