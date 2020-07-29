import * as React from 'react';
import PropTypes from 'prop-types';
import { ClassValue } from '../../utils/classnames';
/**
 * Content wrapper for each Tab Item
 */
interface TabBodyItemProps {
    active?: boolean;
    className?: ClassValue;
}
export default class TabBodyItem extends React.Component<TabBodyItemProps> {
    static propTypes: {
        /**
         * display this component
         *
         */
        active: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        active: boolean;
    };
    render(): JSX.Element;
}
export {};
