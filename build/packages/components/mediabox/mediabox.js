import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
export default class MediaBox extends React.Component {
    render() {
        const { children, type, className, ...others } = this.props;
        const Component = this.props.href ? 'a' : 'div';
        const cls = classNames({
            'weui-media-box': true,
            'weui-media-box_appmsg': type === 'appmsg',
            'weui-media-box_text': type === 'text',
            'weui-media-box_small-appmsg': type === 'small_appmsg',
        }, className);
        return (React.createElement(Component, Object.assign({ className: cls }, others), children));
    }
}
MediaBox.propTypes = {
    /**
     * The layout of media box, Options: appmsg/text/small_appmsg
     *
     */
    type: PropTypes.string
};
MediaBox.defaultProps = {
    type: 'text'
};
;
