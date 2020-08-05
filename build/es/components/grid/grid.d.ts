import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * WeUI Grid wrapper, contain elements of `GridIcon` and `GridLabel`
 *
 */
declare type IReactComponent<P = any> = React.FC<P> | React.ComponentClass<P> | React.ClassicComponentClass<P>;
interface GridProps {
    icon?: any;
    label?: string;
    component?: IReactComponent;
    className?: any;
    children?: React.ReactNode;
}
declare function Grid(props: GridProps): JSX.Element;
declare namespace Grid {
    var propTypes: {
        /**
         * Label string for grid
         *
         */
        label: PropTypes.Requireable<string>;
        /**
         * Icon placeholder
         *
         */
        icon: PropTypes.Requireable<any>;
        /**
         * pass in an component to replace Grid but apply same style
         */
        component: PropTypes.Requireable<(...args: any[]) => any>;
    };
    var defaultProps: {
        label: string | undefined;
        icon: any;
    };
}
export default Grid;
