import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Footer of Panel
 *
 */
interface PanelFooterProps {
    className?: any;
    href?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export default function PanelFooter(props: PanelFooterProps) {
    const { className, children, ...others } = props;
    const Component = props.href ? 'a' : 'div';
    const cls = classNames({
        'weui-panel__ft': true,
        [className]: className,
    });

    return (
        <Component className={cls} {...others}>
            {children}
        </Component>
    );
}
