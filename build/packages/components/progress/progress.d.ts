import * as React from 'react';
import PropTypes from 'prop-types';
/**
 *  progress bar
 *
 */
interface ProgressProps {
    className?: string;
    showCancel: boolean;
    value: number;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
declare const Progress: {
    (props: ProgressProps): JSX.Element;
    propTypes: {
        /**
         * value of the bar
         *
         */
        value: PropTypes.Requireable<number>;
        /**
         * enable cancel button
         *
         */
        showCancel: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        value: number;
        showCancel: boolean;
    };
};
export default Progress;
