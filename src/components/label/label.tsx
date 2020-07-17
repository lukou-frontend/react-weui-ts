import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * WeUI Label Wrapper
 *
 */
interface LabelProps {
  className?: any
}
const Label = (props: LabelProps) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-label': true,
        [className]: className
    });

    return (
        <div>
            <label className={cls} {...others}/>
        </div>
    );
};

export default Label;