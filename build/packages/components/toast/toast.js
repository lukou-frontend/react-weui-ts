import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Mask from '../mask/index';
import Icon from '../icon/index';
class Toast extends React.Component {
    render() {
        const { className = '', icon, show, children, iconSize, ...others } = this.props;
        const cls = classNames('weui-toast', {
            [className]: className
        });
        return (React.createElement("div", { style: { display: show ? 'block' : 'none' } },
            React.createElement(Mask, { transparent: true }),
            React.createElement("div", Object.assign({ className: cls }, others),
                React.createElement(Icon, { value: icon, size: iconSize, className: "weui-icon_toast" }),
                React.createElement("p", { className: "weui-toast_content" }, children))));
    }
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
    show: PropTypes.bool
};
Toast.defaultProps = {
    icon: 'toast',
    show: false,
};
export default Toast;
