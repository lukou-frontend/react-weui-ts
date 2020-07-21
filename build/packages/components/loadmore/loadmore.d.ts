import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Loadmore Indicators.
 *
 */
interface LoadMoreProps {
    className?: any;
    loading?: boolean;
    showLine?: boolean;
    showDot?: boolean;
    children?: React.ReactNode;
}
declare const LoadMore: {
    (props: LoadMoreProps): JSX.Element;
    propTypes: {
        /**
         * display laoding spinner
         *
         */
        loading: PropTypes.Requireable<boolean>;
        /**
         * display side lines
         *
         */
        showLine: PropTypes.Requireable<boolean>;
        /**
         * display dot in the center
         *
         */
        showDot: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        loading: boolean | undefined;
        showLine: boolean | undefined;
        showDot: boolean | undefined;
    };
};
export default LoadMore;
