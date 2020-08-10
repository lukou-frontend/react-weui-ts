import * as React from 'react';
import PropTypes from 'prop-types';
import { ClassValue } from '../../utils/classnames';
/**
 * Content wrapper for each Tab Item
 */
interface TabBodyItemProps {
    active?: boolean;
    className?: ClassValue;
    children?: React.ReactNode;
}
declare function TabBodyItem(props: TabBodyItemProps): JSX.Element;
declare namespace TabBodyItem {
    var propTypes: {
        /**
         * display this component
         *
         */
        active: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        active: boolean;
    };
}
export default TabBodyItem;
