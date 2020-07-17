import * as React from 'react';
import classNames from '../../utils/classnames';
const Radio = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-check': true,
        [className]: className
    });
    return (React.createElement("div", null,
        React.createElement("input", Object.assign({ className: cls, type: "radio" }, others)),
        React.createElement("span", { className: "weui-icon-checked" })));
};
export default Radio;
