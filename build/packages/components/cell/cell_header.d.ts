import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Header of `Cell`
 *
 */
interface CellHeaderProps {
    className?: any;
    primary?: boolean;
    children?: React.ReactNode;
}
declare const CellHeader: {
    (props: CellHeaderProps): JSX.Element;
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
export default CellHeader;
