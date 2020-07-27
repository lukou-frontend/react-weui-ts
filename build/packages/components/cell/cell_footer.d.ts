import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Footer of `Cell`
 *
 */
interface CellFooterProps {
    className?: any;
    primary?: boolean;
    children?: React.ReactNode;
}
declare const CellFooter: {
    (props: CellFooterProps): JSX.Element;
    propTypes: {
        /**
         * if cell body is the primary block
         *
         */
        primary: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        primary: boolean | undefined;
    };
};
export default CellFooter;
