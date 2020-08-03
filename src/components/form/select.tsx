import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * weui wrapper for select
 *
 */
interface Option {
  value: string,
  label: string
}
interface SelectProps {
  data: Array<Option>,
  className?: any,
  children?: React.ReactNode,
  defaultValue?: string
}
export default class Select extends React.Component<SelectProps> {
  static propTypes = {
    /**
     * object arrays of options, `value` and `label` properties is required
     *
     */
    data: PropTypes.array
  };

  static defaultProps = {
    data: [] as SelectProps['data']
  };

  renderData(data: Array<Option>) {
    return data.map((item, i) => {
      const { value, label, ...otherItem} = item
      return <option
        key={i}
        value={value}
        {...otherItem}
        selected={this.props.defaultValue === value}
      >
        {label}
      </option>
    });
  }

  render() {
    const { className, data, children, defaultValue, ...others } = this.props;
    const cls = classNames({
      'weui-select': true,
      [className]: className
    });

    return (
      <select className={cls} {...others}>
        {data.length > 0 ? this.renderData(data) : children}
      </select>
    );
  }
};
