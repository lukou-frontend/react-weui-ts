import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Cell consist of `CellBody`, `CellHeader` and `CellFooter` for flexible reason
 *
 */
declare type IReactComponent<P = any> = React.FC<P> | React.ComponentClass<P> | React.ClassicComponentClass<P>;
interface CellProps {
    access?: boolean;
    className?: any;
    link?: boolean;
    htmlFor?: string;
    href?: string;
    component?: IReactComponent;
    children?: React.ReactNode;
    [key: string]: any;
}
export default class Cell extends React.Component<CellProps, any> {
    static propTypes: {
        /**
         * if cell should have arrow or link
         *
         */
        access: PropTypes.Requireable<boolean>;
        /**
         * if this cell body is link
         *
         */
        link: PropTypes.Requireable<boolean>;
        /**
         * pass in an component to replace Cell but apply same style
         *
         */
        component: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        access: boolean | undefined;
        link: boolean | undefined;
    };
    constructor(props: CellProps);
    render(): JSX.Element;
}
export {};
