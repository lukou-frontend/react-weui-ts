import * as React from 'react';
import classNames, { ClassValue } from '../../utils/classnames';

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