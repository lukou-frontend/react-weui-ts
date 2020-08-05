import * as React from 'react';
import classNames, { ClassValue } from '../../utils/classnames';

/**
 * Content Wrapper for Tab
 */
interface TabBodyProps {
    className?: ClassValue;
    children?: React.ReactNode;
}
export default function TabBody(props: TabBodyProps) {
    const { children, className, ...others } = props;
    const cls = classNames(
        {
            'weui-tab__panel': true,
        },
        className,
    );

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
}
