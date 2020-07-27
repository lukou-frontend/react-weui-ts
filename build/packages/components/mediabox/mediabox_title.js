import * as React from 'react';
import classNames from '../../utils/classnames';
export default class MediaBoxTitle extends React.Component {
    render() {
        const { children, className, ...others } = this.props;
        const cls = classNames({
            'weui-media-box__title': true
        }, className);
        return (React.createElement("h4", Object.assign({ className: cls }, others), children));
    }
}
;
