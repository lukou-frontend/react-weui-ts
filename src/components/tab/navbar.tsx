import * as React from 'react';
import classNames, { ClassValue } from '../../utils/classnames';

/**
 *  wrapper for navbar
 *
 */
interface NavBarProps {
  className?: ClassValue
}
export default class NavBar extends React.Component<NavBarProps> {

    render() {

        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-navbar': true
        }, className);

        return (
            <div className={cls} {...others}>
                {children}
            </div>
        );
    }
}