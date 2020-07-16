import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * weui wrapper for form
 *
 */
interface FormProps {
  checkbox?: boolean,
  radio?: boolean,
  className?: any,
  children?: React.ReactNode
}
class Form extends React.Component<FormProps> {
    static propTypes = {
        /**
         * if this form is use for radios
         *
         */
        radio: PropTypes.bool,
        /**
         * if this form is use for checkbox
         *
         */
        checkbox: PropTypes.bool
    };

    static defaultProps = {
        radio: false as FormProps['radio'],
        checkbox: false as FormProps['checkbox']
    };

    render() {
        const { children, className, radio, checkbox, ...others } = this.props;
        const cls = classNames({
            'weui-cells': true,
            'weui-cells_form': !radio && !checkbox,
            'weui-cells_radio': radio,
            'weui-cells_checkbox': checkbox,
            [className]: className
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};


export default Form;
