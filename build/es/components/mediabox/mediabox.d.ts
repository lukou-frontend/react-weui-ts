import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Media Object, Typically use with `Panel` to display pictures and text, consists of `MediaBoxBody`, `MediaBoxDescription`, `MediaBoxHeader`
 *
 */
interface MediaBoxProps {
    className?: any;
    type?: string;
    href?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export default class MediaBox extends React.Component<MediaBoxProps> {
    static propTypes: {
        /**
         * The layout of media box, Options: appmsg/text/small_appmsg
         *
         */
        type: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        type: string | undefined;
    };
    render(): JSX.Element;
}
export {};
