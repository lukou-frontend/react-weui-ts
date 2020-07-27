import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
export default class NavBarItem extends React.Component {
    render() {
        const { children, className, active, label, ...others } = this.props;
        const cls = classNames({
            'weui-navbar__item': true,
            'weui-bar__item_on': active
        }, className);
        return (React.createElement("div", Object.assign({ className: cls }, others), label ? label : children));
    }
}
NavBarItem.propTypes = {
    /**
     * indicate tab is active
     *
     */
    active: PropTypes.bool,
    /**
     * label of the item
     *
     */
    label: PropTypes.string
};
NavBarItem.defaultProps = {
    active: false,
};
