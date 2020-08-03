import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * WeUI Input wrapper for `input`
 *
 */
interface InputProps {
    defaultValue?: string;
    className?: any;
    children?: React.ReactNode;
    maxLength?: number;
    style?: React.CSSProperties;
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
declare const Input: {
    (props: InputProps): JSX.Element;
    propTypes: {
        defaultValue: PropTypes.Requireable<string>;
    };
    defaultProps: {
        defaultValue: string | undefined;
    };
};
export default Input;
