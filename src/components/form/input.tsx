import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

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
    onChange?: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    [key: string]: any;
}
const Input = (props: InputProps) => {
    const {
        className,
        maxLength,
        value,
        defaultValue,
        placeholder,
        onChange,
        ...others
    } = props;
    const cls = classNames({
        'weui-input': true,
        [className]: className,
    });

    return (
        <div>
            {value ? (
                <input
                    className={cls}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    value={value || ''}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    {...others}
                />
            ) : (
                <input
                    className={cls}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    {...others}
                />
            )}
            <span className="weui-icon-checked" />
        </div>
    );
};

Input.propTypes = {
    defaultValue: PropTypes.string,
};

Input.defaultProps = {
    defaultValue: undefined as InputProps['defaultValue'],
};

export default Input;
