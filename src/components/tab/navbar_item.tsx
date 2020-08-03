import * as React from 'react';
import PropTypes from 'prop-types';
import classNames, { ClassValue } from '../../utils/classnames';

/**
 *  Navbar item to display info
 *
 */
interface NavBarItemProps {
  active?: boolean,
  className?: ClassValue,
  label: string,
  onClick?: () => void
}
export default class NavBarItem extends React.Component<NavBarItemProps> {
    static propTypes = {
        /**
         * indicate tab is active
         *
         */
        active: PropTypes.bool,
        /**
         * label of the item
         *
         */
        label: PropTypes.string
    };

    static defaultProps = {
      active: false,
    };

    render() {

        const {children, className, active, label, ...others} = this.props;
        const cls = classNames({
            'weui-navbar__item': true,
            'weui-bar__item_on': active
        }, className);

        return (
            <div className={cls} {...others}>
                {label ? label : children}
            </div>
        );
    }
}
