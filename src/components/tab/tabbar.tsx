import * as React from 'react';
import classNames, { ClassValue } from '../../utils/classnames';

/**
 *  Bottom bar for tabs
 *
 */
interface TabBarProps {
    className?: ClassValue;
    children?: React.ReactNode;
}
export default function TabBar(props: TabBarProps) {
    const { children, className, ...others } = props;
    const cls = classNames(
        {
            'weui-tabbar': true,
        },
        className,
    );

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
}
