import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * weui wrapper for form
 *
 */
interface FormProps {
    checkbox?: boolean;
    radio?: boolean;
    className?: any;
    children?: React.ReactNode;
}
function Form(props: FormProps) {
    const { children, className, radio, checkbox, ...others } = props;
    const cls = classNames({
        'weui-cells': true,
        'weui-cells_form': !radio && !checkbox,
        'weui-cells_radio': radio,
        'weui-cells_checkbox': checkbox,
        [className]: className,
    });

    return (
        <div className={cls} {...others}>
            {children}
        </div>
    );
}
Form.propTypes = {
    /**
     * if this form is use for radios
     *
     */
    radio: PropTypes.bool,
    /**
     * if this form is use for checkbox
     *
     */
    checkbox: PropTypes.bool,
};

Form.defaultProps = {
    radio: false as FormProps['radio'],
    checkbox: false as FormProps['checkbox'],
};

export default Form;
