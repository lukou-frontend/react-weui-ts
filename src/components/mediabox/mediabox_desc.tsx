import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Description of MediaBox
 *
 */
interface MediaBoxDescriptionProps {
    className?: any;
    children?: React.ReactNode;
}
export default function MediaBoxDescription(props: MediaBoxDescriptionProps) {
    const { children, className, ...others } = props;
    const cls = classNames(
        {
            'weui-media-box__desc': true,
        },
        className,
    );

    return (
        <p className={cls} {...others}>
            {children}
        </p>
    );
}
