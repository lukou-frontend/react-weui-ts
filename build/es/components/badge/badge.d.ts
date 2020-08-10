import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Small status descriptors for UI elements.
 *
 */
interface BadgeProps {
    dot?: boolean;
    preset?: 'header' | 'body' | 'footer' | 'default';
    className?: any;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare function Badge(props: BadgeProps): JSX.Element;
declare namespace Badge {
    var propTypes: {
        /**
         * display dot style without content
         *
         */
        dot: PropTypes.Requireable<boolean>;
        /**
         * some preset layout for other UI elements, include 'header', 'body', 'footer'
         *
         */
        preset: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        dot: boolean | undefined;
        preset: "default" | "body" | "footer" | "header" | undefined;
    };
}
export default Badge;
