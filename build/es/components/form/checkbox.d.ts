import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * weui wrapper for checkbox
 *
 */
interface CheckboxProps {
    className?: any;
    children?: React.ReactNode;
    onChange: (checked: boolean, e: React.ChangeEvent) => void;
}
export default class Checkbox extends React.Component<CheckboxProps> {
    constructor(props: CheckboxProps);
    static propTypes: {
        /**
         * onChange事件回调函数，function(checked:boolean, event: Event)
         *
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        onChange: (checked: boolean, e: React.ChangeEvent<Element>) => void;
    };
    render(): JSX.Element;
}
export {};
