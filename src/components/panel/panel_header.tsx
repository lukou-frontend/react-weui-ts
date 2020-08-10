import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Header of Panel
 *
 */
interface PanelHeaderProps {
    className?: any;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export default function PanelHeader(props: PanelHeaderProps) {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-panel__hd': true,
        [className]: className,
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
}
