import * as React from 'react';
import classNames, { ClassValue } from '../../utils/classnames';

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