import * as React from 'react';
import classNames from '../../utils/classnames';
import PropTypes from 'prop-types';
import './switch.less'

/**
 * weui switch style for checkbox
 *
 */
type SwitchChangeEventHandler = (checked: boolean|undefined, event: React.ChangeEvent<HTMLInputElement>) => void;
interface SwitchProps {
  className?: string,
  checked?: boolean,
  size: 'default'|'small',
  onChange: SwitchChangeEventHandler
}
const Switch = (props: SwitchProps) => {
    const { className = '', checked, size, onChange,  ...others } = props;
    const cls = classNames({
        'weui-switch': true,
        'weui-switch-small': size === 'small',
        [className]: className
    });
    const inputProps: any = Object.assign({}, others);
    checked && (inputProps['checked'] = 'checked')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e.target.checked, e)
    }

    return (
        <div>
            <input className={cls} type="checkbox" {...inputProps} onChange={handleChange} />
            <span className="weui-icon-checked"></span>
        </div>
    );
};

Switch.propTypes = {
  /**
   * input选择框的class
   *
   */
  className: PropTypes.string,
  /**
   * 指定当前是否选中
   *
   */
  checked: PropTypes.bool,
  /**
   * 开关大小，可选值：default small
   *
   */
  size: PropTypes.string,
  /**
   * 变化时回调函数，function(checked: boolean, event: Event)
   *
   */
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  checked: false,
  size: 'default' as SwitchProps['size']
};

export default Switch;