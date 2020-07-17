import * as React from 'react';
<<<<<<< HEAD:src/components/tab/tabbar.js
import classNames from '../../utils/classnames';
=======
import classNames, { ClassValue } from '../../utils/classnames';
>>>>>>> 22457ee33b81803fa4d9d2b69f5cad8d9770b654:src/components/tab/tabbar.tsx

/**
 *  Bottom bar for tabs
 *
 */
interface TabBarProps {
  className?: ClassValue
}
export default class TabBar extends React.Component<TabBarProps> {

    render() {

        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-tabbar': true
        }, className);

        return (
            <div className={cls} {...others}>
                {children}
            </div>
        );
    }
}