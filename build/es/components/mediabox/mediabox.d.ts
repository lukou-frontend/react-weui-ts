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
declare function MediaBox(props: MediaBoxProps): JSX.Element;
declare namespace MediaBox {
    var propTypes: {
        /**
         * The layout of media box, Options: appmsg/text/small_appmsg
         *
         */
        type: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        type: string | undefined;
    };
}
export default MediaBox;
