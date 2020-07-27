import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Meta Item for `MeidaBoxInfo`
 *
 */
interface MediaBoxInfoMetaProps {
    className?: any;
    extra?: boolean;
}
export default class MediaBoxInfoMeta extends React.Component<MediaBoxInfoMetaProps> {
    static propTypes: {
        /**
         * add left margin to indicate extra
         *
         */
        extra: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        extra: boolean;
    };
    render(): JSX.Element;
}
export {};
