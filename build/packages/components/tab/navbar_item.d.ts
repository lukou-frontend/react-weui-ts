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
}
export default class NavBarItem extends React.Component<NavBarItemProps> {
    static propTypes: {
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
    static defaultProps: {
        active: boolean;
    };
    render(): JSX.Element;
}
export {};
