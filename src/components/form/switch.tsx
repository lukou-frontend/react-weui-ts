import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * weui switch style for checkbox
 *
 */
interface SwitchProps {
  className?: any
}
const Switch:React.FC<SwitchProps> = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-switch': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} type="checkbox" {...others}/>
            <span className="weui-icon-checked"></span>
        </div>
    );
};

export default Switch;