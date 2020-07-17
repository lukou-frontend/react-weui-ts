import * as React from 'react';
<<<<<<< HEAD:src/components/tab/navbar.js
import classNames from '../../utils/classnames';
=======
import classNames, { ClassValue } from '../../utils/classnames';
>>>>>>> 22457ee33b81803fa4d9d2b69f5cad8d9770b654:src/components/tab/navbar.tsx

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