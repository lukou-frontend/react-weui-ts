import * as React from 'react';
import classNames, { ClassValue } from '../../utils/classnames';

/**
 * Content Wrapper for Tab
 */
interface TabBodyProps {
  className?: ClassValue
}
export default class TabBody extends React.Component<TabBodyProps> {

    render() {

        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-tab__panel': true
        }, className);

        return (
            <div className={cls} {...others}>
                {children}
            </div>
        );
    }
}