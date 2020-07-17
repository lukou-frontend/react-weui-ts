import * as React from 'react';
import classNames from '../../utils/classnames';
export default class TabBarIcon extends React.Component {
    render() {
        const { children, className, ...others } = this.props;
        const cls = classNames({
            'weui-tabbar__icon': true,
        }, className);
        return (React.createElement("div", Object.assign({ className: cls }, others), children));
    }
}
