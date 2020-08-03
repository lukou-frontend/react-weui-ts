import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Content of Panel
 *
 */
interface PanelBodyProps {
  className?: any,
  children: React.ReactNode,
  style?: React.CSSProperties,
}
export default class PanelBody extends React.Component<PanelBodyProps> {
    render() {
        const {className, children, ...others} = this.props;
        const cls = classNames({
            'weui-panel__bd': true,
            [className]: className
        });

        return (
            <div className={cls} {...others}>{children}</div>
        );
    }
};
