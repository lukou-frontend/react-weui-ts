import * as React from 'react';
import classNames from '../../utils/classnames';
export default class PanelHeader extends React.Component {
    render() {
        const { className, children, ...others } = this.props;
        const cls = classNames({
            'weui-panel__hd': true,
            [className]: className
        });
        return (React.createElement("div", Object.assign({ className: cls }, others), children));
    }
}
;
