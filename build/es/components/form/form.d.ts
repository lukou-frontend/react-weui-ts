import * as React from 'react';
import PropTypes from 'prop-types';
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
declare function Form(props: FormProps): JSX.Element;
declare namespace Form {
    var propTypes: {
        /**
         * if this form is use for radios
         *
         */
        radio: PropTypes.Requireable<boolean>;
        /**
         * if this form is use for checkbox
         *
         */
        checkbox: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        radio: boolean | undefined;
        checkbox: boolean | undefined;
    };
}
export default Form;
