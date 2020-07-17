import * as React from 'react';
import classNames from '../../utils/classnames';
export default class PanelBody extends React.Component {
    render() {
        const { className, children, ...others } = this.props;
        const cls = classNames({
            'weui-panel__bd': true,
            [className]: className
        });
        return (React.createElement("div", Object.assign({ className: cls }, others), children));
    }
}
;
