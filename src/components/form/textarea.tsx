import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * weui wrapper for textarea
 *
 */
interface TextAreaProps {
  defaultValue?: string,
  maxLength?: number,
  showCounter?: boolean,
  placeholder?: string,
  onChange?: (value: any) => void,
  className?: any,
  children?: React.ReactNode,
  style?: React.CSSProperties,
  rows?: number,
  value?: string,
}
interface TextAreaStates {
  textCounter: number
}
export default class TextArea extends React.Component<TextAreaProps, TextAreaStates> {
  static propTypes = {
    /**
     * display word counter
     *
     */
    showCounter: PropTypes.bool,
    /**
     * max character allow for textarea
     *
     */
    maxLength: PropTypes.number,
    defaultValue: PropTypes.string,
  };

  static defaultProps = {
    showCounter: true,
    defaultValue: undefined
  };

  state = {
    textCounter: this.props.defaultValue ? this.props.defaultValue.length : 0
  };

  handleChange(e: { target: { value: string | any[]; }; }) {
    this.setState({ textCounter: e.target.value.length });

    //forward event to props if any
    this.props.onChange && this.props.onChange(e);
  }

  render() {
    const { className, children, showCounter, maxLength, placeholder, rows, value, onChange, ...others } = this.props;
    const cls = classNames({
      'weui-textarea': true,
      [className]: className
    });

    return (
      <div>
        {
          value ? (
            <textarea
              className={cls}
              maxLength={maxLength}
              placeholder={placeholder}
              value={value || ''}
              onChange={this.handleChange.bind(this)}
              rows={rows || 3}
              {...others}
            >
              {children}
            </textarea>
          ) : (
              <textarea
                className={cls}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={this.handleChange.bind(this)}
                rows={rows || 3}
                {...others}
              >
                {children}
              </textarea>
            )
        }
        {
          showCounter ?
            <div className="weui-textarea-counter">
              <span>{this.state.textCounter}</span>{maxLength ? '/' + maxLength : false}
            </div>
            : false
        }
      </div>
    );
  }
};
