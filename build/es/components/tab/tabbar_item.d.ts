import * as React from 'react';
import PropTypes from 'prop-types';
import { ClassValue } from '../../utils/classnames';
/**
 *  Tabbar item
 *
 */
interface TabBarItemProps {
    active?: boolean;
    icon?: any;
    label?: string;
    className?: ClassValue;
    onClick?: () => void;
    children?: React.ReactNode;
}
declare function TabBarItem(props: TabBarItemProps): JSX.Element;
declare namespace TabBarItem {
    var propTypes: {
        /**
         * indicate currently active
         *
         */
        active: PropTypes.Requireable<boolean>;
        /**
         * icon of item
         *
         */
        icon: PropTypes.Requireable<any>;
        /**
         * label of item
         *
         */
        label: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        active: boolean;
        icon: boolean;
        label: string;
    };
}
export default TabBarItem;
