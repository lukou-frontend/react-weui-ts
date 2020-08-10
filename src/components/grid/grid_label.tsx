import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * WeUI Grid Label Wrapper
 *
 */
interface GridLabelProps {
    className?: any;
    children?: React.ReactNode;
}
export default function GridLabel(props: GridLabelProps) {
    const { children, className, ...others } = props;
    const cls = classNames(
        {
            'weui-grid__label': true,
        },
        className,
    );

    return (
        <p className={cls} {...others}>
            {children}
        </p>
    );
}
