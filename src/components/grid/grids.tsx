import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Grid from './grid';

/**
 * Mobile grid system, typical use for 9 grid system. contain elements of `Grid`
 *
 */
interface Data {
  icon?: any,
  label?: string
}
interface GridsProps {
  data: Array<Data>,
  className?: any,
  children?: React.ReactNode
}
export default class Grids extends React.Component<GridsProps> {
    static propTypes = {
        /**
         * Automatic grids, contain Array of Objects for grid, Optional `icon` and `label` property for each object
         *
         */
        data: PropTypes.array
    };

    static defaultProps = {
      data: [] as GridsProps['data']
    };

    renderData(data: Array<Data>) {
        return data.map((item, i) => {
            return <Grid
                    key={i}
                    icon={item.icon}
                    label={item.label}
                    {...item}
                    />;
        });
    }

    render() {

        const {children, data, className, ...others} = this.props;
        const cls = classNames({
            'weui-grids': true
        }, className);

        return (
            <div className={cls} {...others}>
            {data.length > 0 ? this.renderData(data) : children}
            </div>
        );
    }
};
