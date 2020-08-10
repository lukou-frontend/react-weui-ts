import * as React from 'react';
import PropTypes from 'prop-types';
import classNames, { ClassValue } from '../../utils/classnames';
import TabBarIcon from './tabbar_icon';
import TabBarLabel from './tabbar_label';

/**
 *  Tabbar item
 *
 */
interface TabBarItemProps {
    active?: boolean;
    icon?: any;
    label?: string;
    className?: ClassValue;
    onClick?: () => void;
    children?: React.ReactNode;
}
export default function TabBarItem(props: TabBarItemProps) {
    const { children, className, active, icon, label, ...others } = props;
    const cls = classNames(
        {
            'weui-tabbar__item': true,
            'weui-bar__item_on': active,
        },
        className,
    );

    if (icon || label) {
        return (
            <div className={cls} {...others}>
                {icon ? <TabBarIcon>{icon}</TabBarIcon> : false}
                {label ? <TabBarLabel>{label}</TabBarLabel> : false}
            </div>
        );
    }
    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
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
    label: PropTypes.string,
};

TabBarItem.defaultProps = {
    active: false,
    icon: false,
    label: '',
};
