import * as React from 'react';
import classNames, { ClassValue } from '../../utils/classnames';

/**
 *  Icon wrapper for icon use in TabBar
 *
 */
interface TabBarIconProps {
    className?: ClassValue;
    children?: React.ReactNode;
}
export default function TabBarIcon(props: TabBarIconProps) {
    const { children, className, ...others } = props;
    const cls = classNames(
        {
            'weui-tabbar__icon': true,
        },
        className,
    );

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
}
