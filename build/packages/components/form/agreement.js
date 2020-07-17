import * as React from 'react';
import classNames from '../../utils/classnames';
const Agreement = (props) => {
    const { className, children, id, ...others } = props;
    const cls = classNames({
        'weui-agree': true,
        [className]: className
    });
    return (React.createElement("label", { className: cls, htmlFor: id },
        React.createElement("input", Object.assign({ id: id, type: "checkbox", className: "weui-agree__checkbox" }, others)),
        React.createElement("span", { className: "weui-agree__text" }, children)));
};
export default Agreement;
