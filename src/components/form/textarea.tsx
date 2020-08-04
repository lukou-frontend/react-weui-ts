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
<<<<<<< HEAD
  placeholder?: string,
  rows?: number,
  cols?: number
=======
  style?: React.CSSProperties,
  rows?: number,
  value?: string,
>>>>>>> cb04d572b814b626a65c9c2e3fe8db6eb459ebd6
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
<<<<<<< HEAD
    if (this.props.onChange) this.props.onChange(e);
  }

  render() {
    const { className, children, showCounter, maxLength, onChange, placeholder, rows, cols, ...others } = this.props;
=======
    this.props.onChange && this.props.onChange(e);
  }

  render() {
    const { className, children, showCounter, maxLength, placeholder, rows, value, defaultValue, onChange, ...others } = this.props;
>>>>>>> cb04d572b814b626a65c9c2e3fe8db6eb459ebd6
    const cls = classNames({
      'weui-textarea': true,
      [className]: className
    });

    return (
      <div>
<<<<<<< HEAD
        <textarea
          className={cls}
          maxLength={maxLength}
          rows={rows}
          cols={cols}
          onChange={this.handleChange.bind(this)}
          placeholder={placeholder}
          {...others}>
          {children}
        </textarea>
=======
        {
          value ? (
            <textarea
              className={cls}
              maxLength={maxLength}
              placeholder={placeholder}
              defaultValue={defaultValue}
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
                defaultValue={defaultValue}
                onChange={this.handleChange.bind(this)}
                rows={rows || 3}
                {...others}
              >
                {children}
              </textarea>
            )
        }
>>>>>>> cb04d572b814b626a65c9c2e3fe8db6eb459ebd6
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
