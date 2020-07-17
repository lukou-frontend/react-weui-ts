import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * image wrapper for vcode
 *
 */
interface VCodeProps {
  className?: any
}
const VCode = (props: VCodeProps) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-vcode-img': true,
        [className]: className
    });

    return (
        <div>
            <img className={cls} {...others}/>
        </div>
    );
};

export default VCode;