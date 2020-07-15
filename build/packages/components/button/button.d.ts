import * as React from 'react';
/**
 *  Button usage：OK(primary)、Cancel(default)、Warn(warn).
 *
 */
declare type IReactComponent<P = any> = React.FC<P> | React.ComponentClass<P> | React.ClassicComponentClass<P>;
interface ButtonProps {
    disabled?: boolean;
    type?: string;
    size?: string;
    plain?: boolean;
    className?: any;
    href?: string;
    component?: IReactComponent;
}
export default class Button extends React.Component<ButtonProps> {
    static defaultProps: {
        disabled: boolean;
        type: string;
        size: string;
    };
    constructor(props: ButtonProps);
    render(): JSX.Element;
}
export {};
