import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * weui wrapper for textarea
 *
 */
interface TextAreaProps {
    defaultValue?: string;
    maxLength?: number;
    showCounter?: boolean;
    onChange?: (value: any) => void;
    className?: any;
    children?: React.ReactNode;
    placeholder?: string;
    rows?: number;
    cols?: number;
}
interface TextAreaStates {
    textCounter: number;
}
export default class TextArea extends React.Component<TextAreaProps, TextAreaStates> {
    static propTypes: {
        /**
         * display word counter
         *
         */
        showCounter: PropTypes.Requireable<boolean>;
        /**
         * max character allow for textarea
         *
         */
        maxLength: PropTypes.Requireable<number>;
        defaultValue: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        showCounter: boolean;
        defaultValue: undefined;
    };
    state: {
        textCounter: number;
    };
    handleChange(e: {
        target: {
            value: string | any[];
        };
    }): void;
    render(): JSX.Element;
}
export {};
