import * as React from 'react';
import classNames from '../../utils/classnames';
import PropTypes from 'prop-types';
export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { className, onChange, ...others } = this.props;
        const cls = classNames({
            'weui-check': true,
            [className]: className
        });
        const handleChange = (e) => {
            onChange && onChange(e.target.checked, e);
        };
        return (React.createElement("div", null,
            React.createElement("input", Object.assign({ className: cls, type: "checkbox" }, others, { onChange: handleChange })),
            React.createElement("span", { className: "weui-icon-checked" })));
    }
}
Checkbox.propTypes = {
    /**
     * onChange事件回调函数，function(checked:boolean, event: Event)
     *
     */
    onChange: PropTypes.func,
};
Checkbox.defaultProps = {
    onChange: undefined,
};
;
