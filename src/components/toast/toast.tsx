<<<<<<< HEAD:src/components/toast/toast.js
import * as React from 'react'
=======
import * as React from 'react';
>>>>>>> 22457ee33b81803fa4d9d2b69f5cad8d9770b654:src/components/toast/toast.tsx
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Mask from '../mask/index';
import Icon from '../icon/index';

/**
 *  pop out indicator to inform users
 *
 */
interface ToastProps {
  className?: string,
  show: boolean,
  iconSize: string,
  [key: string]: any
}
class Toast extends React.Component<ToastProps> {
    static propTypes = {
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
        show: PropTypes.bool
    };

    static defaultProps = {
        icon: 'toast',
        show: false,
    };

    render() {
        const {className = '', icon, show, children, iconSize, ...others} = this.props;
        const cls = classNames('weui-toast', {
            [className]: className
        });
        return (
            <div style={{display: show ? 'block' : 'none'}}>
                <Mask transparent={true}/>
                <div className={cls} {...others}>
                    <Icon value={icon} size={iconSize} className="weui-icon_toast"/>
                    <p className="weui-toast_content">{children}</p>
                </div>
            </div>
        );
    }
}

export default Toast;
