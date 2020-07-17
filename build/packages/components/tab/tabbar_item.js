import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import TabBarIcon from './tabbar_icon';
import TabBarLabel from './tabbar_label';
export default class TabBarItem extends React.Component {
    render() {
        const { children, className, active, icon, label, ...others } = this.props;
        const cls = classNames({
            'weui-tabbar__item': true,
            'weui-bar__item_on': active
        }, className);
        if (icon || label) {
            return (React.createElement("div", Object.assign({ className: cls }, others),
                icon ? React.createElement(TabBarIcon, null, icon) : false,
                label ? React.createElement(TabBarLabel, null, label) : false));
        }
        else {
            return (React.createElement("div", Object.assign({ className: cls }, others), children));
        }
    }
}
TabBarItem.propTypes = {
    /**
     * indicate currently active
     *
     */
    active: PropTypes.bool,
    /**
     * icon of item
     *
     */
    icon: PropTypes.any,
    /**
     * label of item
     *
     */
    label: PropTypes.string
};
TabBarItem.defaultProps = {
    active: false,
    icon: false,
    label: ''
};
