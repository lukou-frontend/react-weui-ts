import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Evenly distribute flex items
 *
 */
interface FlexItemProps {
    component: string;
    children?: React.ReactNode;
}
declare const FlexItem: {
    (props: FlexItemProps): JSX.Element;
    propTypes: {
        /**
         * pass component to replace the component but maintaing style
         *
         */
        component: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    defaultProps: {
        component: string;
    };
};
export default FlexItem;
