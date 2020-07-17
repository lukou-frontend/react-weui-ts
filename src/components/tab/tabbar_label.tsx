import * as React from 'react';
<<<<<<< HEAD:src/components/tab/tabbar_label.js
import classNames from '../../utils/classnames';
=======
import classNames, { ClassValue } from '../../utils/classnames';
>>>>>>> 22457ee33b81803fa4d9d2b69f5cad8d9770b654:src/components/tab/tabbar_label.tsx

/**
 *  label wrapper for text inside TabBarItem
 *
 */
interface TabBarLabelProps {
  className?: ClassValue
}
export default class TabBarLabel extends React.Component<TabBarLabelProps> {

    render() {

        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-tabbar__label': true,
        }, className);

        return (
            <p className={cls} {...others}>
                {children}
            </p>
        );
    }
}