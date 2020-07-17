import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * WeUI Grid Icon Wrapper
 *
 */
interface GridIconProps {
  className?: any,
  children?: React.ReactNode
}
export default class GridIcon extends React.Component<GridIconProps> {
    render() {
        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-grid__icon': true
        }, className);

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};