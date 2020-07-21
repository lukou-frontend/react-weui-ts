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
}
export default class TabBarItem extends React.Component<TabBarItemProps> {
    static propTypes: {
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
    static defaultProps: {
        active: boolean;
        icon: boolean;
        label: string;
    };
    render(): JSX.Element;
}
export {};
