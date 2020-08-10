import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * weui wrapper for select
 *
 */
interface Option {
    value: string | number;
    label: string;
}
interface SelectProps {
    data: Array<Option>;
    className?: any;
    children?: React.ReactNode;
    defaultValue?: string | number;
}
export default class Select extends React.Component<SelectProps> {
    static propTypes = {
        /**
         * object arrays of options, `value` and `label` properties is required
         *
         */
        data: PropTypes.array,
    };

    static defaultProps = {
        data: [] as SelectProps['data'],
    };

    renderData() {
        const { data } = this.props;
        return data.map((item, i) => {
            const { value, label, ...otherItem } = item;
            return (
                <option key={i} value={value} {...otherItem}>
                    {label}
                </option>
            );
        });
    }

    render() {
        const {
            className,
            data,
            children,
            defaultValue,
            ...others
        } = this.props;
        const cls = classNames({
            'weui-select': true,
            [className]: className,
        });

        return (
            <select defaultValue={defaultValue} className={cls} {...others}>
                {data.length > 0 ? this.renderData() : children}
            </select>
        );
    }
}
