import * as React from 'react';
import PropTypes from 'prop-types';
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
    static propTypes: {
        /**
         * object arrays of options, `value` and `label` properties is required
         *
         */
        data: PropTypes.Requireable<any[]>;
    };
    static defaultProps: {
        data: Option[];
    };
    renderData(data: Array<Option>): JSX.Element[];
    render(): JSX.Element;
}
export {};
