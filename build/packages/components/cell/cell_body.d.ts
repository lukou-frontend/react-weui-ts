import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Content of `Cell`
 *
 */
interface CellBodyProps {
    className?: any;
    children?: React.ReactNode;
    primary?: boolean;
}
declare const CellBody: {
    (props: CellBodyProps): JSX.Element;
    propTypes: {
        /**
         * if cell body is the primary block
         *
         */
        primary: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        primary: boolean;
    };
};
export default CellBody;
