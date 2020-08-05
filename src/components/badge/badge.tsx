import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

const presetStyles = {
    default: {},
    header: {
        position: 'absolute',
        top: '-.4em',
        right: '-.4em',
    },
    body: {
        marginLeft: '5px',
    },
    footer: {
        marginLeft: '5px',
        marginRight: '5px',
    },
};
/**
 * Small status descriptors for UI elements.
 *
 */
interface BadgeProps {
    dot?: boolean;
    preset: 'header' | 'body' | 'footer' | 'default';
    className?: any;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

function Badge(props: BadgeProps) {
    const { children, className, dot, style, preset, ...domProps } = props;
    const clz = classNames(
        'weui-badge',
        {
            'weui-badge_dot': dot,
        },
        className,
    );

    const stylez = { ...presetStyles[preset], ...style };
    return (
        <span
            className={clz}
            style={stylez as React.CSSProperties}
            {...domProps}
        >
            {children}
        </span>
    );
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
    dot: false as BadgeProps['dot'],
    preset: 'default' as BadgeProps['preset'],
};

export default Badge;
