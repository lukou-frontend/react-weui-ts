import * as React from 'react';
import PropTypes from 'prop-types';
import './actionsheet.less';
/**
 * Used to display a collection of actions that contain a set of interactivity, including descriptions, links, and so on. Popup from the bottom, generally used to respond to user clicks on the page.
 */
declare type item = {
    label: string;
    className?: string;
    [key: string]: any;
};
interface ActionSheetProps {
    menus: item[];
    actions: item[];
    show: boolean;
    onRequestClose: React.TouchEventHandler;
    type: string;
}
declare class ActionSheet extends React.Component<ActionSheetProps> {
    static propTypes: {
        /**
         * Array of Objects for menus, `label` property is Required
         *
         */
        menus: PropTypes.Requireable<any[]>;
        /**
         * Array of Objects for actions, `label` property is Required
         *
         */
        actions: PropTypes.Requireable<any[]>;
        /**
         * To display ActionSheet
         *
         */
        show: PropTypes.Requireable<boolean>;
        /**
         * Function triggers when user click on the mask
         *
         */
        onRequestClose: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * style: ios/android
         */
        type: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        type: string;
        menus: never[];
        actions: never[];
        show: boolean;
    };
    constructor(props: Readonly<ActionSheetProps>);
    renderMenuItem(): JSX.Element[];
    renderActions(): JSX.Element[];
    handleMaskClick(e: React.TouchEvent): void;
    render(): JSX.Element;
}
export default ActionSheet;
