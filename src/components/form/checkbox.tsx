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
  onChange: (e: Event) => void
}
export default class Checkbox extends React.Component<CheckboxProps>{
  constructor(props: CheckboxProps) {
    super(props)
  }
  static propTypes = {
    /**
     * onChange事件
     *
     */
    onChange: PropTypes.func,
  }
  static defaultProps = {
    onChange: undefined as unknown as CheckboxProps['onChange'],
  };
  render () {
    const { className, onChange, ...others } = this.props;
    const cls = classNames({
        'weui-check': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} type="checkbox" {...others} onChange={onChange.bind(this)} />
            <span className="weui-icon-checked"></span>
        </div>
    );
  }
};
