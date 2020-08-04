import * as React from 'react';
import PropTypes from 'prop-types';
/**
 *  Mobile select ui, currently only support Touch Events
 *
 */
interface Action {
    label: string;
    onClick?: (e: any) => void;
}
interface PickerProps {
    actions: Array<Action>;
    defaultSelect?: Array<any>;
    groups: Array<any>;
    lang: {
        leftBtn: string;
        rightBtn: string;
    };
    onCancel: (e: any) => void;
    onChange: (selected: any, arg2: any) => void;
    onGroupChange?: (item: any, i: any, groupIndex: any, selected: number, arg4: any) => void;
    show: boolean;
    className?: any;
}
interface PickerStates {
    selected: any;
    actions: Array<Action>;
    closing: boolean;
}
declare class Picker extends React.Component<PickerProps, PickerStates> {
    static propTypes: {
        /**
         * consists of array of object(max 2) with property `label` and others pass into element
         *
         */
        actions: PropTypes.Requireable<any[]>;
        /**
         * array objects consists of groups for each scroll group
         *
         */
        groups: PropTypes.Requireable<any[]>;
        /**
         * default group index thats selected, if not provide, automatic chose the best fiting item when mounted
         *
         */
        defaultSelect: PropTypes.Requireable<any[]>;
        /**
         * trigger when individual group change, pass property(`item`, `item index in group`, `group index in groups`, `selected`, `picker instance`)
         *
         */
        onGroupChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * on selected change, pass property `selected` for array of slected index to `groups`
         *
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * excute when the popup about to close
         *
         */
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * display the component
         *
         */
        show: PropTypes.Requireable<boolean>;
        /**
         * language object consists of `leftBtn` and `rightBtn`
         *
         */
        lang: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        actions: Action[];
        groups: any[];
        show: boolean;
        lang: {
            leftBtn: string;
            rightBtn: string;
        };
    };
    constructor(props: Readonly<PickerProps>);
    handleChanges(): void;
    handleChange(item: any, i: any, groupIndex: React.ReactText): void;
    handleClose(cb: {
        (): void;
        (): void;
        (): void;
        (): void;
    }): void;
    renderActions(): JSX.Element;
    renderGroups(): JSX.Element[];
    render(): false | JSX.Element;
}
export default Picker;
