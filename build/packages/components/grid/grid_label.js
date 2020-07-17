import * as React from 'react';
import classNames from '../../utils/classnames';
export default class GridLabel extends React.Component {
    render() {
        const { children, className, ...others } = this.props;
        const cls = classNames({
            'weui-grid__label': true
        }, className);
        return (React.createElement("p", Object.assign({ className: cls }, others), children));
    }
}
;
