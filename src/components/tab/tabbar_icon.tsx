import * as React from 'react';
<<<<<<< HEAD:src/components/tab/tabbar_icon.js
import classNames from '../../utils/classnames';
=======
import classNames, { ClassValue } from '../../utils/classnames';
>>>>>>> 22457ee33b81803fa4d9d2b69f5cad8d9770b654:src/components/tab/tabbar_icon.tsx

/**
 *  Icon wrapper for icon use in TabBar
 *
 */
interface TabBarIconProps {
  className?: ClassValue
}
export default class TabBarIcon extends React.Component<TabBarIconProps> {

    render() {

        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-tabbar__icon': true,
        }, className);

        return (
            <div className={cls} {...others}>
                {children}
            </div>
        );
    }
}