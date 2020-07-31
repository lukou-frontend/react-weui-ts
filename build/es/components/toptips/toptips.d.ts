import * as React from 'react';
import PropTypes from 'prop-types';
import './toptips.less';
/**
 *  Drop down message from top
 *
 */
interface ToptipsProps {
    show: boolean;
    type?: 'default' | 'warn' | 'info' | 'primary';
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
}
declare const Toptips: {
    (props: ToptipsProps): JSX.Element;
    propTypes: {
        /**
         * display tips
         *
         */
        show: PropTypes.Requireable<boolean>;
        /**
         * type: `default`, `warn`, `info`, `primary`
         */
        type: PropTypes.Requireable<string>;
    };
    defaultProps: {
        show: boolean;
        type: "default" | "primary" | "warn" | "info" | undefined;
    };
};
export default Toptips;
