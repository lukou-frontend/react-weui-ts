import * as React from 'react';
import classNames from '../../utils/classnames';
import PropTypes from 'prop-types';
import './switch.less';
const Switch = (props) => {
    const { className = '', checked, size, onChange, ...others } = props;
    const cls = classNames({
        'weui-switch': true,
        'weui-switch-small': size === 'small',
        [className]: className
    });
    const inputProps = Object.assign({}, others);
    const handleChange = (e) => {
        onChange && onChange(e.target.checked, e);
    };
    return (React.createElement("div", null,
        React.createElement("input", Object.assign({ className: cls, type: "checkbox", checked: checked }, inputProps, { onChange: handleChange })),
        React.createElement("span", { className: "weui-icon-checked" })));
};
Switch.propTypes = {
    /**
     * input选择框的class
     *
     */
    className: PropTypes.string,
    /**
     * 指定当前是否选中
     *
     */
    checked: PropTypes.bool,
    /**
     * 开关大小，可选值：default small
     *
     */
    size: PropTypes.string,
    /**
     * 变化时回调函数，function(checked: boolean, event: Event)
     *
     */
    onChange: PropTypes.func,
};
Switch.defaultProps = {
    checked: false,
    size: 'default'
};
export default Switch;
