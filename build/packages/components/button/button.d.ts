import * as React from 'react';
/**
 *  Button usage：OK(primary)、Cancel(default)、Warn(warn).
 *
 */
declare type IReactComponent<P = any> = React.FC<P> | React.ComponentClass<P> | React.ClassicComponentClass<P>;
interface ButtonProps {
    disabled?: boolean;
    type?: 'primary' | 'default' | 'warn' | 'vcode';
    size?: 'normal' | 'small';
    plain?: boolean;
    className?: string;
    href?: string;
    component?: IReactComponent;
}
export default class Button extends React.Component<ButtonProps> {
    static defaultProps: {
        disabled: boolean;
        type: "primary" | "default" | "warn" | "vcode" | undefined;
        size: "normal" | "small" | undefined;
    };
    render(): JSX.Element;
}
export {};
