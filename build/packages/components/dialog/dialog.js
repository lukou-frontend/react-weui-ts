import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Mask from '../mask/index';
class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAndroid: ''
        };
    }
    renderButtons() {
        return this.props.buttons.map((action, idx) => {
            const { type, label, ...others } = action;
            const className = classNames({
                'weui-dialog__btn': true,
                'weui-dialog__btn_default': type === 'default',
                'weui-dialog__btn_primary': type === 'primary'
            });
            return (React.createElement("a", Object.assign({ key: idx, href: "javascript:;" }, others, { className: className }), label));
        });
    }
    render() {
        const { title, show, className, children, buttons, type, autoDectect, ...others } = this.props;
        const styleType = type ? type : 'ios';
        const cls = classNames('weui-dialog', {
            'weui-skin_android': styleType === 'android',
            [className]: className
        });
        return (React.createElement("div", { style: { display: show ? 'block' : 'none' } },
            React.createElement(Mask, null),
            React.createElement("div", Object.assign({ className: cls }, others),
                title ?
                    React.createElement("div", { className: "weui-dialog__hd" },
                        React.createElement("strong", { className: "weui-dialog__title" }, title)) : false,
                React.createElement("div", { className: "weui-dialog__bd" }, children),
                React.createElement("div", { className: "weui-dialog__ft" }, this.renderButtons()))));
    }
}
Dialog.propTypes = {
    /**
     * Object Arrays of buttons, `label` property is require
     *
     */
    buttons: PropTypes.array,
    /**
     * to display the dialog
     *
     */
    show: PropTypes.bool,
    /**
     * Title of dialog
     *
     */
    title: PropTypes.string,
    /**
     * Specify display style: ios/android, default is ios when autoDetect not on
     *
     */
    type: PropTypes.string,
};
Dialog.defaultProps = {
    buttons: [],
    show: false,
    title: '',
    type: '',
};
export default Dialog;
