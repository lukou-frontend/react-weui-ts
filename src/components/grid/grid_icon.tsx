import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * WeUI Grid Icon Wrapper
 *
 */
interface GridIconProps {
    className?: any;
    children?: React.ReactNode;
}
export default function GridIcon(props: GridIconProps) {
    const { children, className, ...others } = props;
    const cls = classNames(
        {
            'weui-grid__icon': true,
        },
        className,
    );

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
}
