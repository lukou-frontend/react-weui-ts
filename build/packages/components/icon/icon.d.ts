import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * WeUI Icons
 *
 */
interface IconProps {
    size?: 'small' | 'large';
    value: string;
    className?: any;
    primary?: any;
    [key: string]: any;
}
declare class Icon extends React.Component<IconProps> {
    static propTypes: {
        /**
         * types of [weui icons](https://github.com/weui/weui/wiki/Icon)
         *
         */
        value: PropTypes.Requireable<string>;
        /**
         * size of icon, options: small/large
         *
         */
        size: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        value: string;
        size: "small" | "large" | undefined;
    };
    render(): JSX.Element;
}
export default Icon;
