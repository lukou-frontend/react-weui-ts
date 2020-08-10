import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 *  Button usage：OK(primary)、Cancel(default)、Warn(warn).
 *
 */
type IReactComponent<P = any> =
    | React.FC<P>
    | React.ComponentClass<P>
    | React.ClassicComponentClass<P>;
interface ButtonProps {
    disabled?: boolean;
    type?: 'primary' | 'default' | 'warn' | 'vcode';
    size?: 'normal' | 'small';
    plain?: boolean;
    className?: string;
    href?: string;
    component?: IReactComponent;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLElement>;
    [key: string]: any;
}
export default function Button(props: ButtonProps) {
    const {
        component,
        type,
        size,
        plain,
        className = '',
        children,
        ...others
    } = props;
    const Component =
        component || (props.href || type === 'vcode' ? 'a' : 'button');
    const cls =
        type === 'vcode'
            ? classNames('weui-vcode-btn', { [className]: className })
            : classNames({
                  'weui-btn': true,
                  'weui-btn_mini': size === 'small',
                  'weui-btn_primary': type === 'primary' && !plain,
                  'weui-btn_default': type === 'default' && !plain,
                  'weui-btn_warn': type === 'warn',
                  'weui-btn_plain-primary': type === 'primary' && plain,
                  'weui-btn_plain-default': type === 'default' && plain,
                  'weui-btn_disabled': props.disabled && !plain,
                  'weui-btn_plain-disabled': props.disabled && plain,
                  [className]: className,
              });

    return (
        <Component {...others} className={cls}>
            {children}
        </Component>
    );
}
Button.defaultProps = {
    disabled: false,
    type: 'primary' as ButtonProps['type'],
    size: 'normal' as ButtonProps['size'],
};
