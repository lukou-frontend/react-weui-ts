import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Small status descriptors for UI elements.
 *
 */
interface BadgeProps {
    dot?: boolean;
    preset: 'header' | 'body' | 'footer' | 'default';
    className?: any;
    style?: React.CSSProperties;
}
declare class Badge extends React.Component<BadgeProps> {
    static propTypes: {
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
    static defaultProps: {
        dot: boolean | undefined;
        preset: "header" | "body" | "footer" | "default";
    };
    render(): JSX.Element;
}
export default Badge;
