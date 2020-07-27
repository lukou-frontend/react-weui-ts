import * as React from 'react';
import classNames from '../../utils/classnames';
export default class TabBar extends React.Component {
    render() {
        const { children, className, ...others } = this.props;
        const cls = classNames({
            'weui-tabbar': true
        }, className);
        return (React.createElement("div", Object.assign({ className: cls }, others), children));
    }
}
