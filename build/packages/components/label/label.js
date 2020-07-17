import * as React from 'react';
import classNames from '../../utils/classnames';
const Label = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-label': true,
        [className]: className
    });
    return (React.createElement("div", null,
        React.createElement("label", Object.assign({ className: cls }, others))));
};
export default Label;
