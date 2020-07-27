import * as React from 'react';
import classNames from '../../utils/classnames';
const VCode = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-vcode-img': true,
        [className]: className
    });
    return (React.createElement("div", null,
        React.createElement("img", Object.assign({ className: cls }, others))));
};
export default VCode;
