import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Mask from '../mask/index';
import Icon, { SizeType } from '../icon/index';

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
function Toast(props: ToastProps) {
    const { className = '', icon, show, children, iconSize, ...others } = props;
    const cls = classNames('weui-toast', {
        [className]: className,
    });
    return (
        <div style={{ display: show ? 'block' : 'none' }}>
            <Mask transparent />
            <div className={cls} {...others}>
                <Icon
                    value={icon}
                    size={iconSize}
                    className="weui-icon_toast"
                />
                <p className="weui-toast_content">{children}</p>
            </div>
        </div>
    );
}
Toast.propTypes = {
    /**
     * Icon Value
     *
     */
    icon: PropTypes.string,
    /**
     * Icon Size
     *
     */
    iconSize: PropTypes.string,
    /**
     * display toast
     *
     */
    show: PropTypes.bool,
};

Toast.defaultProps = {
    icon: 'toast',
    show: false,
};
export default Toast;
