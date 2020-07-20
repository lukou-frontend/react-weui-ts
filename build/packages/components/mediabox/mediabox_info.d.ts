import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Info Items for MediaBox
 *
 */
interface Data {
    extra: string;
    label: string;
}
interface MediaBoxInfoProps {
    className?: any;
    data: Array<Data>;
    children: React.ReactNode;
}
export default class MediaBoxInfo extends React.Component<MediaBoxInfoProps> {
    static propTypes: {
        /**
         * automatically include Metas, object array of metas, property required: `extra`, `label`
         *
         */
        data: PropTypes.Requireable<any[]>;
    };
    static defaultProps: {
        data: Data[];
    };
    renderData(metas: any[]): JSX.Element[];
    render(): JSX.Element;
}
export {};
