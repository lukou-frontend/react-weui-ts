import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button';
/**
 * A full notification page to indicate results
 *
 */
interface Button {
    label: string;
    type?: string;
}
interface MsgProps {
    type?: string;
    buttons: Array<Button>;
    title?: string;
    description?: string;
    extraHref?: string;
    extraText?: string;
    footer?: any;
    className?: any;
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
        type: string | undefined;
        buttons: Button[];
    };
    _renderButtons(): JSX.Element[];
    render(): JSX.Element;
}
export {};
