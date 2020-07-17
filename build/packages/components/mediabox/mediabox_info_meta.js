import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
export default class MediaBoxInfoMeta extends React.Component {
    render() {
        const { children, extra, className, ...others } = this.props;
        const cls = classNames({
            'weui-media-box__info__meta': true,
            'weui-media-box__info__meta_extra': extra
        }, className);
        return (React.createElement("li", Object.assign({ className: cls }, others), children));
    }
}
MediaBoxInfoMeta.propTypes = {
    /**
     * add left margin to indicate extra
     *
     */
    extra: PropTypes.bool,
};
MediaBoxInfoMeta.defaultProps = {
    extra: false,
};
;
