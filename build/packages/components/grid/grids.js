import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Grid from './grid';
export default class Grids extends React.Component {
    renderData(data) {
        return data.map((item, i) => {
            return React.createElement(Grid, Object.assign({ key: i, icon: item.icon, label: item.label }, item));
        });
    }
    render() {
        const { children, data, className, ...others } = this.props;
        const cls = classNames({
            'weui-grids': true
        }, className);
        return (React.createElement("div", Object.assign({ className: cls }, others), data.length > 0 ? this.renderData(data) : children));
    }
}
Grids.propTypes = {
    /**
     * Automatic grids, contain Array of Objects for grid, Optional `icon` and `label` property for each object
     *
     */
    data: PropTypes.array
};
Grids.defaultProps = {
    data: []
};
;
