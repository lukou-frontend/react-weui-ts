import * as React from 'react';
/**
 *  Button usage：OK(primary)、Cancel(default)、Warn(warn).
 *
 */
declare type IReactComponent<P = any> = React.FC<P> | React.ComponentClass<P> | React.ClassicComponentClass<P>;
interface ButtonProps {
    disabled?: boolean;
    type: 'primary' | 'default' | 'warn' | 'vcode';
    size?: 'normal' | 'small';
    plain?: boolean;
    className?: any;
    href?: string;
    component?: IReactComponent;
}
export default class Button extends React.Component<ButtonProps> {
    static defaultProps: {
        disabled: boolean | undefined;
        type: "default" | "primary" | "warn" | "vcode";
        size: "small" | "normal" | undefined;
    };
    render(): JSX.Element;
}
export {};
