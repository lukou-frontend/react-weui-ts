import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * image wrapper for vcode
 *
 */
interface VCodeProps {
    className?: any;
    src?: string;
}
const VCode = (props: VCodeProps) => {
    const { className, src, ...others } = props;
    const cls = classNames({
        'weui-vcode-img': true,
        [className]: className,
    });

    return (
        <div>
            <img src={src} className={cls} {...others} alt="" />
        </div>
    );
};

export default VCode;
