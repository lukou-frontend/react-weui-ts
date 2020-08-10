import * as React from 'react';
import PropTypes from 'prop-types';
import { ClassValue } from '../../utils/classnames';
/**
 *  Navbar item to display info
 *
 */
interface NavBarItemProps {
    active?: boolean;
    className?: ClassValue;
    label: string;
    onClick?: () => void;
    children?: React.ReactNode;
}
declare function NavBarItem(props: NavBarItemProps): JSX.Element;
declare namespace NavBarItem {
    var propTypes: {
        /**
         * indicate tab is active
         *
         */
        active: PropTypes.Requireable<boolean>;
        /**
         * label of the item
         *
         */
        label: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        active: boolean;
    };
}
export default NavBarItem;
