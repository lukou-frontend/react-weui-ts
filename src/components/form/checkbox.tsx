import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * weui wrapper for checkbox
 *
 */
interface CheckboxProps {
  className?: any,
  children?: React.ReactNode
}
const Checkbox = (props: CheckboxProps) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-check': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} type="checkbox" {...others}/>
            <span className="weui-icon-checked"></span>
        </div>
    );
};

export default Checkbox;
