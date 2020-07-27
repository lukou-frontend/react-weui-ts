import * as React from 'react';
import classNames from '../../utils/classnames';
export default class PanelFooter extends React.Component {
    render() {
        const { className, children, ...others } = this.props;
        const Component = this.props.href ? 'a' : 'div';
        const cls = classNames({
            'weui-panel__ft': true,
            [className]: className
        });
        return (React.createElement(Component, Object.assign({ className: cls }, others), children));
    }
}
;
