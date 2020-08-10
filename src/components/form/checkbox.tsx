import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * weui wrapper for checkbox
 *
 */
interface CheckboxProps {
    className?: any;
    children?: React.ReactNode;
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    onChange: (checked: boolean, e: React.ChangeEvent) => void;
    [key: string]: any;
}

export default function Checkbox(props: CheckboxProps) {
    const {
        className,
        checked,
        name,
        value,
        disabled,
        onChange,
        ...others
    } = props;
    const cls = classNames({
        'weui-check': true,
        [className]: className,
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.checked, e);
    };

    return (
        <div>
            <input
                disabled={disabled || false}
                name={name}
                value={value}
                checked={checked}
                className={cls}
                type="checkbox"
                {...others}
                onChange={handleChange}
            />
            <span className="weui-icon-checked" />
        </div>
    );
}
Checkbox.propTypes = {
    /**
     * onChange事件回调函数，function(checked:boolean, event: Event)
     *
     */
    onChange: PropTypes.func,
};
Checkbox.defaultProps = {
    onChange: (undefined as unknown) as CheckboxProps['onChange'],
};
