import * as React from 'react';
import PropTypes from 'prop-types';
import classNames, { ClassValue } from '../../utils/classnames';

/**
 *  Navbar item to display info
 *
 */
interface NavBarItemProps {
    active?: boolean;
    className?: ClassValue;
    label: string;
    onClick?: () => void;
    children?: React.ReactNode;
}
export default function NavBarItem(props: NavBarItemProps) {
    const { children, className, active, label, ...others } = props;
    const cls = classNames(
        {
            'weui-navbar__item': true,
            'weui-bar__item_on': active,
        },
        className,
    );

    return (
        <div className={cls} {...others}>
            {label || children}
        </div>
    );
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
    label: PropTypes.string,
};

NavBarItem.defaultProps = {
    active: false,
};
