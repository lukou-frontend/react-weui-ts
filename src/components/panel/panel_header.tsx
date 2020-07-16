import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Header of Panel
 *
 */
interface PanelHeaderProps {
  className?: any,
  children: React.ReactNode
}
export default class PanelHeader extends React.Component<PanelHeaderProps> {
    render() {
        const {className, children, ...others} = this.props;
        const cls = classNames({
            'weui-panel__hd': true,
            [className]: className
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};
