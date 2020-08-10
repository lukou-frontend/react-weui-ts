import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Content of Panel
 *
 */
interface PanelBodyProps {
    className?: any;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export default function PanelBody(props: PanelBodyProps) {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-panel__bd': true,
        [className]: className,
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
}
