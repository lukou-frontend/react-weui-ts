import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import { Button, ButtonArea } from '../button';
import { Footer, FooterLinks, FooterLink } from '../footer';
import Icon from '../icon/index';
import deprecationWarning from '../../utils/deprecationWarning';

/**
 * A full notification page to indicate results
 *
 */
interface Thisbutton {
    label: string;
    type: 'primary' | 'default' | 'warn' | 'vcode';
    onClick?: () => void;
}
interface MsgProps {
    type: string;
    buttons: Array<Thisbutton>;
    title?: string;
    description?: string;
    extraHref?: string;
    extraText?: string;
    footer?: any;
    className?: any;
    [key: string]: any;
}
export default class Msg extends React.Component<MsgProps> {
    static propTypes = {
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
        footer: PropTypes.any,
    };

    static defaultProps = {
        type: 'success' as MsgProps['type'],
        buttons: [] as MsgProps['buttons'],
    };

    _renderButtons() {
        return this.props.buttons.map((button, idx) => {
            const { type, label, ...others } = button;
            return (
                <Button key={idx} {...others} type={type}>
                    {label}
                </Button>
            );
        });
    }

    render() {
        const {
            children,
            className,
            type,
            title,
            description,
            extraHref,
            extraText,
            footer,
            buttons,
            ...others
        } = this.props;
        const cls = classNames('weui-msg', {
            [className]: className,
        });

        let elFooter = footer || (() => false);

        if (!elFooter() && (extraHref || extraText)) {
            deprecationWarning('Msg extraHref/extraText', 'Msg footer', null);

            elFooter = () => (
                <Footer>
                    <FooterLinks>
                        <FooterLink href={extraHref}>{extraText}</FooterLink>
                    </FooterLinks>
                </Footer>
            );
        }

        return (
            <div className={cls} {...others}>
                <div className="weui-msg__icon-area">
                    <Icon value={type} size="large" />
                </div>
                <div className="weui-msg__text-area">
                    {title ? (
                        <h2 className="weui-msg__title">{title}</h2>
                    ) : (
                        false
                    )}
                    {description ? (
                        <p className="weui-msg__desc">{description}</p>
                    ) : (
                        false
                    )}
                    {children}
                </div>
                <div className="weui-msg__opr-area">
                    <ButtonArea>{this._renderButtons()}</ButtonArea>
                </div>
                <div className="weui-msg__extra-area">{elFooter()}</div>
            </div>
        );
    }
}
