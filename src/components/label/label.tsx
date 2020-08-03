import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * WeUI Label Wrapper
 *
 */
interface LabelProps {
  className?: any,
  children?: React.ReactNode
}
const Label = (props: LabelProps) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-label': true,
        [className]: className
    });

    return (
        <div>
            <label className={cls} {...others}>{children}</label>
        </div>
    );
};

export default Label;
