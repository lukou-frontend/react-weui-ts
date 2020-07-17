import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import { Button, ButtonArea } from '../button';
import { Footer, FooterLinks, FooterLink } from '../footer';
import Icon from '../icon/index';
import deprecationWarning from '../../utils/deprecationWarning';
export default class Msg extends React.Component {
    _renderButtons() {
        return this.props.buttons.map((button, idx) => {
            const { type, label, ...others } = button;
            return (React.createElement(Button, Object.assign({ key: idx }, others, { type: type }), label));
        });
    }
    render() {
        const { children, className, type, title, description, extraHref, extraText, footer, buttons, ...others } = this.props;
        const cls = classNames('weui-msg', {
            [className]: className
        });
        let elFooter = footer ? footer : () => false;
        if (!elFooter() && (extraHref || extraText)) {
            deprecationWarning('Msg extraHref/extraText', 'Msg footer', null);
            elFooter = () => (React.createElement(Footer, null,
                React.createElement(FooterLinks, null,
                    React.createElement(FooterLink, { href: extraHref }, extraText))));
        }
        return (React.createElement("div", Object.assign({ className: cls }, others),
            React.createElement("div", { className: "weui-msg__icon-area" },
                React.createElement(Icon, { value: type, size: 'large' })),
            React.createElement("div", { className: "weui-msg__text-area" },
                title ? React.createElement("h2", { className: "weui-msg__title" }, title) : false,
                description ? React.createElement("p", { className: "weui-msg__desc" }, description) : false,
                children),
            React.createElement("div", { className: "weui-msg__opr-area" },
                React.createElement(ButtonArea, null, this._renderButtons())),
            React.createElement("div", { className: "weui-msg__extra-area" }, elFooter())));
    }
}
Msg.propTypes = {
    /**
     * Icon type
     *
     */
    type: PropTypes.string,
    /**
     * Object array of Buttons, require at least `label` property
     *
     */
    buttons: PropTypes.array,
    /**
     * Page Title
     *
     */
    title: PropTypes.string,
    /**
     * Page Description
     *
     */
    description: PropTypes.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraHref: PropTypes.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraText: PropTypes.string,
    /**
     * Footer Element of Page
     *
     */
    footer: PropTypes.any
};
Msg.defaultProps = {
    type: 'success',
    buttons: []
};
