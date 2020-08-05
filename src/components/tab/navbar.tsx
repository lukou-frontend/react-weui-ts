import * as React from 'react';
import classNames, { ClassValue } from '../../utils/classnames';

/**
 *  wrapper for navbar
 *
 */
interface NavBarProps {
    className?: ClassValue;
    children?: React.ReactNode;
}
export default function NavBar(props: NavBarProps) {
    const { children, className, ...others } = props;
    const cls = classNames(
        {
            'weui-navbar': true,
        },
        className,
    );

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
}
