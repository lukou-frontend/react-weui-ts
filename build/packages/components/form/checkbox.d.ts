import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * weui wrapper for checkbox
 *
 */
interface CheckboxProps {
    className?: any;
    children?: React.ReactNode;
    onChange: (e: Event) => void;
}
export default class Checkbox extends React.Component<CheckboxProps> {
    constructor(props: CheckboxProps);
    static propTypes: {
        /**
         * onChange事件
         *
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        onChange: (e: Event) => void;
    };
    render(): JSX.Element;
}
export {};
