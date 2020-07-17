import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
const presetStyles = {
    'default': {},
    'header': {
        position: 'absolute',
        top: '-.4em',
        right: '-.4em'
    },
    'body': {
        marginLeft: '5px'
    },
    'footer': {
        marginLeft: '5px',
        marginRight: '5px'
    }
};
class Badge extends React.Component {
    render() {
        const { children, className, dot, style, preset, ...domProps } = this.props;
        let clz = classNames('weui-badge', {
            'weui-badge_dot': dot
        }, className);
        let stylez = Object.assign({}, presetStyles[preset], style);
        return React.createElement("span", Object.assign({ className: clz, style: stylez }, domProps), children);
    }
}
Badge.propTypes = {
    /**
     * display dot style without content
     *
     */
    dot: PropTypes.bool,
    /**
     * some preset layout for other UI elements, include 'header', 'body', 'footer'
     *
     */
    preset: PropTypes.string,
};
Badge.defaultProps = {
    dot: false,
    preset: 'default'
};
export default Badge;
