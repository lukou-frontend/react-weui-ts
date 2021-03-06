import * as React from 'react';
import PropTypes from 'prop-types';
import { ClassValue } from '../../utils/classnames';
/**
 *  weui search component
 *
 */
interface SearchBarState {
    text: string;
    focus: boolean;
}
interface SearchBarProps {
    defaultValue?: string;
    autocomplete?: string;
    lang: {
        cancel: string;
    };
    onCancel?: (e: React.TouchEvent) => void;
    onChange?: (text: string, e?: React.ChangeEvent<HTMLInputElement> | React.TouchEvent) => void;
    onClear?: (e: React.TouchEvent) => void;
    onSubmit?: (text: string, e: React.SyntheticEvent<HTMLFormElement>) => void;
    placeholder?: string;
    searchName?: string;
    className?: ClassValue;
}
interface DefaultProps extends Pick<SearchBarProps, 'placeholder' | 'searchName' | 'onChange' | 'onClear' | 'onCancel' | 'onSubmit' | 'lang' | 'autocomplete'> {
}
declare class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    private searchInput;
    static propTypes: {
        /**
         * default value for the searchbar if any
         *
         */
        defaultValue: PropTypes.Requireable<string>;
        /**
         * default place holder text
         *
         */
        placeholder: PropTypes.Requireable<string>;
        /**
         * name of the input component
         *
         */
        searchName: PropTypes.Requireable<string>;
        /**
         * trigger when text change on input pass `text` property
         *
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * trigger when user click clear icon
         *
         */
        onClear: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * trigger when user click cancel button
         *
         */
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * trigger when user submit (enter action)
         *
         */
        onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * language object consists of `cancel` property
         *
         */
        lang: PropTypes.Requireable<object>;
        /**
         * 输入字段是否应该启用自动完成功能。on|off
         *
         */
        autocomplete: PropTypes.Requireable<string>;
    };
    static defaultProps: DefaultProps;
    constructor(props: SearchBarProps);
    changeHandle(e: React.ChangeEvent<HTMLInputElement>): void;
    cancelHandle(e: React.TouchEvent): void;
    clearHandle(e: React.TouchEvent): void;
    blurHandle(): void;
    submitHandle(e: React.SyntheticEvent<HTMLFormElement>): void;
    render(): JSX.Element;
}
export default SearchBar;
