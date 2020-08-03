import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Footer of Panel
 *
 */
interface PanelFooterProps {
  className?: any,
  href?: string,
  children: React.ReactNode,
  style?: React.CSSProperties,
}
export default class PanelFooter extends React.Component<PanelFooterProps> {
    render() {
        const {className, children, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'div';
        const cls = classNames({
            'weui-panel__ft': true,
            [className]: className
        });

        return (
            <Component className={cls} {...others}>{children}</Component>
        );
    }
};
