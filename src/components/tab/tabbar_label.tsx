import * as React from 'react';
import classNames, { ClassValue } from '../../utils/classnames';

/**
 *  label wrapper for text inside TabBarItem
 *
 */
interface TabBarLabelProps {
    className?: ClassValue;
    children?: React.ReactNode;
}
export default function TabBarLabel(props: TabBarLabelProps) {
    const { children, className, ...others } = props;
    const cls = classNames(
        {
            'weui-tabbar__label': true,
        },
        className,
    );

    return (
        <p className={cls} {...others}>
            {children}
        </p>
    );
}
