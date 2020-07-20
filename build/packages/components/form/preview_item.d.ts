import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Preview Item for all purpose usage
 *
 */
interface PreviewItemProps {
    className?: any;
    label?: boolean;
    value?: boolean;
    children?: React.ReactNode;
}
declare const PreviewItem: {
    (props: PreviewItemProps): JSX.Element;
    propTypes: {
        /**
         * The label of item
         *
         */
        label: PropTypes.Requireable<string>;
        /**
         * Value of the label
         *
         */
        value: PropTypes.Requireable<string>;
    };
    defaultProps: {
        label: boolean | undefined;
        value: boolean | undefined;
    };
};
export default PreviewItem;
