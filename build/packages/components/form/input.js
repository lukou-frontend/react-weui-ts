import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
const Input = (props) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-input': true,
        [className]: className
    });
    return (React.createElement("div", null,
        React.createElement("input", Object.assign({ className: cls }, others)),
        React.createElement("span", { className: "weui-icon-checked" })));
};
Input.propTypes = {
    defaultValue: PropTypes.string
};
Input.defaultProps = {
    defaultValue: undefined
};
export default Input;
