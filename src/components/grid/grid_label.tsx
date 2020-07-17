import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * WeUI Grid Label Wrapper
 *
 */
interface GridLabelProps {
  className?: any,
  children?: React.ReactNode
}
export default class GridLabel extends React.Component<GridLabelProps> {
    render() {
        const {children, className, ...others} = this.props;
        const cls = classNames({
            'weui-grid__label': true
        }, className);

        return (
            <p className={cls} {...others}>{children}</p>
        );
    }
};