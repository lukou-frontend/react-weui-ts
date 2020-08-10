import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import GridIcon from './grid_icon';
import GridLabel from './grid_label';

/**
 * WeUI Grid wrapper, contain elements of `GridIcon` and `GridLabel`
 *
 */
type IReactComponent<P = any> =
    | React.FC<P>
    | React.ComponentClass<P>
    | React.ClassicComponentClass<P>;
interface GridProps {
    icon?: any;
    label?: string;
    component?: IReactComponent;
    className?: any;
    children?: React.ReactNode;
}
export default function Grid(props: GridProps) {
    const { children, icon, label, className, component, ...others } = props;
    const cls = classNames(
        {
            'weui-grid': true,
        },
        className,
    );
    const DefaultComponent = 'a';
    const GridComponent = component || DefaultComponent;

    return (
        <GridComponent className={cls} {...others}>
            {icon ? <GridIcon>{icon}</GridIcon> : false}
            {children}
            {label ? <GridLabel>{label}</GridLabel> : false}
        </GridComponent>
    );
}
Grid.propTypes = {
    /**
     * Label string for grid
     *
     */
    label: PropTypes.string,
    /**
     * Icon placeholder
     *
     */
    icon: PropTypes.any,
    /**
     * pass in an component to replace Grid but apply same style
     */
    component: PropTypes.func,
};

Grid.defaultProps = {
    label: '' as GridProps['label'],
    icon: false as GridProps['icon'],
};
