import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import GridIcon from './grid_icon';
import GridLabel from './grid_label';
export default class Grid extends React.Component {
    render() {
        const { children, icon, label, className, component, ...others } = this.props;
        const cls = classNames({
            'weui-grid': true
        }, className);
        var DefaultComponent = 'a';
        var GridComponent = component ? component : DefaultComponent;
        return (React.createElement(GridComponent, Object.assign({ className: cls }, others),
            icon ? React.createElement(GridIcon, null, icon) : false,
            children,
            label ? React.createElement(GridLabel, null, label) : false));
    }
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
    component: PropTypes.func
};
Grid.defaultProps = {
    label: '',
    icon: false
};
;
