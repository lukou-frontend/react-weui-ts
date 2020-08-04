import * as React from 'react';
import classNames from '../../utils/classnames';
import PropTypes from 'prop-types'

/**
 * weui wrapper for checkbox
 *
 */
interface CheckboxProps {
  className?: any,
  children?: React.ReactNode,
  defaultChecked?: boolean,
  disabled?: boolean,
  name?: string,
  value?: string,
  onChange: (checked: boolean, e: React.ChangeEvent) => void,
  [key: string]: any
}
export default class Checkbox extends React.Component<CheckboxProps>{
  constructor(props: CheckboxProps) {
    super(props)
  }
  static propTypes = {
    /**
     * onChange事件回调函数，function(checked:boolean, event: Event)
     *
     */
    onChange: PropTypes.func,
  }
  static defaultProps = {
    onChange: undefined as unknown as CheckboxProps['onChange'],
  };
  render() {
    const { className, defaultChecked, name, value, disabled, onChange, ...others } = this.props;
    const cls = classNames({
      'weui-check': true,
      [className]: className
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e.target.checked, e)
    }

    return (
      <div>
        <input
          disabled={disabled || false}
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          className={cls}
          type="checkbox"
          {...others}
          onChange={handleChange} />
        <span className="weui-icon-checked"></span>
      </div>
    );
  }
};