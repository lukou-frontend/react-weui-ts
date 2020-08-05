import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Modals provide feedback to user
 *
 */
interface Button {
    label: string;
    type?: string;
}
interface DialogProps {
    buttons: Array<Button>;
    show?: boolean;
    title?: string;
    type?: 'ios' | 'android';
    className?: any;
    autoDectect?: boolean;
    children?: React.ReactNode;
}
declare class Dialog extends React.Component<DialogProps> {
    static propTypes: {
        /**
         * Object Arrays of buttons, `label` property is require
         *
         */
        buttons: PropTypes.Requireable<any[]>;
        /**
         * to display the dialog
         *
         */
        show: PropTypes.Requireable<boolean>;
        /**
         * Title of dialog
         *
         */
        title: PropTypes.Requireable<string>;
        /**
         * Specify display style: ios/android, default is ios when autoDetect not on
         *
         */
        type: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        buttons: Button[];
        show: boolean | undefined;
        title: string | undefined;
        type: "ios" | "android" | undefined;
    };
    renderButtons(): JSX.Element[];
    render(): JSX.Element;
}
export default Dialog;
