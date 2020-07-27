import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Mobile grid system, typical use for 9 grid system. contain elements of `Grid`
 *
 */
interface Data {
    icon?: any;
    label?: string;
}
interface GridsProps {
    data: Array<Data>;
    className?: any;
    children?: React.ReactNode;
}
export default class Grids extends React.Component<GridsProps> {
    static propTypes: {
        /**
         * Automatic grids, contain Array of Objects for grid, Optional `icon` and `label` property for each object
         *
         */
        data: PropTypes.Requireable<any[]>;
    };
    static defaultProps: {
        data: Data[];
    };
    renderData(data: Array<Data>): JSX.Element[];
    render(): JSX.Element;
}
export {};
