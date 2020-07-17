import * as React from 'react';
<<<<<<< HEAD:src/components/tab/tab_body.js
import classNames from '../../utils/classnames';
=======
import classNames, { ClassValue } from '../../utils/classnames';
>>>>>>> 22457ee33b81803fa4d9d2b69f5cad8d9770b654:src/components/tab/tab_body.tsx

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