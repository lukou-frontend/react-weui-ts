import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Title for MediaBox
 *
 */
interface MediaBoxTitleProps {
    className?: any;
    children?: React.ReactNode;
}
export default function MediaBoxTitle(props: MediaBoxTitleProps) {
    const { children, className, ...others } = props;
    const cls = classNames(
        {
            'weui-media-box__title': true,
        },
        className,
    );

    return (
        <h4 className={cls} {...others}>
            {children}
        </h4>
    );
}
