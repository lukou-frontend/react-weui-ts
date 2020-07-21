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
        return (React.createElement("div", null,
            React.createElement("input", Object.assign({ className: cls, type: "checkbox" }, others, { onChange: onChange.bind(this) })),
            React.createElement("span", { className: "weui-icon-checked" })));
    }
}
Checkbox.propTypes = {
    /**
     * onChange事件
     *
     */
    onChange: PropTypes.func,
};
Checkbox.defaultProps = {
    onChange: undefined,
};
;
