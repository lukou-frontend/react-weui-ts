import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Meta Item for `MeidaBoxInfo`
 *
 */
interface MediaBoxInfoMetaProps {
    className?: any;
    extra?: boolean;
    children?: React.ReactNode;
}
declare function MediaBoxInfoMeta(props: MediaBoxInfoMetaProps): JSX.Element;
declare namespace MediaBoxInfoMeta {
    var propTypes: {
        /**
         * add left margin to indicate extra
         *
         */
        extra: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        extra: boolean;
    };
}
export default MediaBoxInfoMeta;
