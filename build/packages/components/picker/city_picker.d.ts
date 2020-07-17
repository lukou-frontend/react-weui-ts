import * as React from 'react';
import PropTypes from 'prop-types';
/**
 *  An city pick component build on top of picker
 *
 */
interface Data {
    label: string;
    subitems: any;
}
interface CityPickerProps {
    data: Array<Data>;
    dataMap: {
        id: string;
        items: string;
    };
    lang: {
        leftBtn: string;
        rightBtn: string;
    };
    selected: Array<Data>;
    show: boolean;
    onCancel: (e: any) => void;
    onChange: (text: string) => void;
}
interface CityPickerStates {
    groups: Array<any>;
    selected: Array<Data>;
    picker_show: boolean;
    text: string;
}
declare class CityPicker extends React.Component<CityPickerProps, CityPickerStates> {
    static propTypes: {
        /**
         * Array of item trees, consists property for label and subitems
         *
         */
        data: PropTypes.Validator<any[]>;
        /**
         * keys for data provide, `id` to indicate property name for label, `items` to indicate property name for subitems
         *
         */
        dataMap: PropTypes.Requireable<object>;
        /**
         * currently selected item
         *
         */
        selected: PropTypes.Requireable<any[]>;
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
        data: never[];
        dataMap: {
            id: string;
            items: string;
        };
        selected: never[];
        show: boolean;
        lang: {
            leftBtn: string;
            rightBtn: string;
        };
    };
    constructor(props: CityPickerProps);
    parseData(data: Array<any>, subKey: any, selected?: Array<any>, group?: Array<any>, newselected?: Array<any>): any;
    updateDataBySelected(selected: any, cb: any): void;
    updateGroup(selected: Array<Data>, picker: any): void;
    handleChange(selected: Array<Data>): void;
    render(): JSX.Element;
}
export default CityPicker;
