import * as React from 'react';
import PropTypes from 'prop-types';
/**
 *  An city pick component build on top of picker
 *
 */
declare type CityData = {
    label?: string;
    subitems?: any;
    name?: string;
    code?: string;
};
interface CityPickerProps {
    data: Array<CityData>;
    dataMap: {
        id: string;
        items: string;
    };
    lang: {
        leftBtn: string;
        rightBtn: string;
    };
    selected: Array<any>;
    show: boolean;
    onCancel: (e: any) => void;
    onChange: (text: string) => void;
}
interface CityPickerStates {
    groups: Array<any>;
    selected: Array<CityData>;
    text: string;
}
interface DefaultProps extends Pick<CityPickerProps, 'data' | 'dataMap' | 'selected' | 'show' | 'lang'> {
}
declare class CityPicker extends React.Component<CityPickerProps, CityPickerStates> {
    static propTypes: {
        /**
         * Array of item trees, consists property for label and subitems
         *
         */
        data: PropTypes.Requireable<any[]>;
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
    static defaultProps: DefaultProps;
    constructor(props: CityPickerProps);
    parseData(data: Array<any>, subKey: any, selected?: Array<any>, group?: Array<any>, newselected?: Array<any>): any;
    updateDataBySelected(selected: any, cb: any): void;
    updateGroup(item: any, i: any, groupIndex: any, selected: any, picker: any): void;
    handleChange(selected: Array<CityData>): void;
    render(): JSX.Element;
}
export default CityPicker;
