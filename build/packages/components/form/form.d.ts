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
declare class Form extends React.Component<FormProps> {
    static propTypes: {
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
    static defaultProps: {
        radio: boolean | undefined;
        checkbox: boolean | undefined;
    };
    render(): JSX.Element;
}
export default Form;
