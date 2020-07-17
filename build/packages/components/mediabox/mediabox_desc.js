import * as React from 'react';
import classNames from '../../utils/classnames';
export default class MediaBoxDescription extends React.Component {
    render() {
        const { children, className, ...others } = this.props;
        const cls = classNames({
            'weui-media-box__desc': true
        }, className);
        return (React.createElement("p", Object.assign({ className: cls }, others), children));
    }
}
;
