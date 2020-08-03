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
    component: IReactComponent;
    children?: React.ReactNode;
    onClick?: () => void;
}
declare const Cell: {
    (props: CellProps): JSX.Element;
    propTypes: {
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
    defaultProps: {
        access: boolean | undefined;
        link: boolean | undefined;
    };
};
export default Cell;
