import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * A full notification page to indicate results
 *
 */
interface Thisbutton {
    label: string;
    type: 'primary' | 'default' | 'warn' | 'vcode';
    onClick?: () => void;
}
interface MsgProps {
    type: string;
    buttons: Array<Thisbutton>;
    title?: string;
    description?: string;
    extraHref?: string;
    extraText?: string;
    footer?: any;
    className?: any;
    [key: string]: any;
}
export default class Msg extends React.Component<MsgProps> {
    static propTypes: {
        /**
         * Icon type
         *
         */
        type: PropTypes.Requireable<string>;
        /**
         * Object array of Buttons, require at least `label` property
         *
         */
        buttons: PropTypes.Requireable<any[]>;
        /**
         * Page Title
         *
         */
        title: PropTypes.Requireable<string>;
        /**
         * Page Description
         *
         */
        description: PropTypes.Requireable<string>;
        /**
         * deprecated property from 0.4.x
         *
         */
        extraHref: PropTypes.Requireable<string>;
        /**
         * deprecated property from 0.4.x
         *
         */
        extraText: PropTypes.Requireable<string>;
        /**
         * Footer Element of Page
         *
         */
        footer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        type: string;
        buttons: Thisbutton[];
    };
    _renderButtons(): JSX.Element[];
    render(): JSX.Element;
}
export {};
