import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Mask from '../mask/index';
import './popup.less';
class Popup extends React.Component {
    render() {
        const { className, children, show, onRequestClose, enableMask, ...others } = this.props;
        const cls = classNames('weui-popup', {
            'weui-popup_toggle': show
        }, className);
        return (React.createElement("div", null,
            React.createElement(Mask, { transparent: enableMask, style: { display: show ? 'block' : 'none' }, onClick: onRequestClose }),
            React.createElement("div", Object.assign({ className: cls }, others), children)));
    }
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
    enableMask: PropTypes.bool
};
Popup.defaultProps = {
    show: false,
    enableMask: false
};
export default Popup;
