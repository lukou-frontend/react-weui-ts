import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * weui wrapper for radio
 *
 */
interface RadioProps {
  className?: any,
  children?: React.ReactNode,
  name?: string,
  value?: string | number,
  [key: string]: any
}
const Radio = (props: RadioProps) => {
    const { className, name, value, ...others } = props;
    const cls = classNames({
        'weui-check': true,
        [className]: className
    });

    return (
        <div>
            <input name={name} className={cls} type="radio" value={value} {...others}/>
            <span className="weui-icon-checked"></span>
        </div>
    );
};

export default Radio;