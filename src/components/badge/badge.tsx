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
/**
 * Small status descriptors for UI elements.
 *
 */
interface BadgeProps {
  dot?: boolean,
  preset: 'header' | 'body' |'footer' | 'default',
  className?: any,
  style?: React.CSSProperties
}

class Badge extends React.Component<BadgeProps> {

    static propTypes = {
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

    static defaultProps = {
      dot: false as BadgeProps['dot'],
      preset: 'default' as BadgeProps['preset']
    }

    render() {
        const { children, className, dot, style, preset, ...domProps } = this.props;
        let clz = classNames('weui-badge', {
            'weui-badge_dot': dot
        }, className);

        let stylez = Object.assign({}, presetStyles[preset], style);
        return <span className={clz} style={stylez} {...domProps}>{children}</span>;
    }
}

export default Badge;