/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * WeUI Icons
 *
 */
export declare type SizeType = 'small' | 'large';
interface IconProps {
    size?: SizeType;
    value: string;
    className?: any;
    primary?: any;
    [key: string]: any;
}
declare function Icon(props: IconProps): JSX.Element;
declare namespace Icon {
    var propTypes: {
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
    var defaultProps: {
        value: string;
        size: "small" | "large" | undefined;
    };
}
export default Icon;
