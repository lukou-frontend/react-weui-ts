import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import MediaBoxInfoMeta from './mediabox_info_meta';
export default class MediaBoxInfo extends React.Component {
    renderData(metas) {
        return metas.map((meta, i) => {
            return React.createElement(MediaBoxInfoMeta, { key: i, extra: meta.extra }, meta.label);
        });
    }
    render() {
        const { children, data, className, ...others } = this.props;
        const cls = classNames({
            'weui-media-box__info': true
        }, className);
        return (React.createElement("ul", Object.assign({ className: cls }, others), data.length > 0 ? this.renderData(data) : children));
    }
}
MediaBoxInfo.propTypes = {
    /**
     * automatically include Metas, object array of metas, property required: `extra`, `label`
     *
     */
    data: PropTypes.array,
};
MediaBoxInfo.defaultProps = {
    data: [],
};
;
