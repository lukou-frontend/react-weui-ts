import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
export default class Select extends React.Component {
    renderData(data) {
        return data.map((item, i) => {
            const { value, label, ...otherItem } = item;
            return React.createElement("option", Object.assign({ key: i, value: value }, otherItem), label);
        });
    }
    render() {
        const { className, data, children, ...others } = this.props;
        const cls = classNames({
            'weui-select': true,
            [className]: className
        });
        return (React.createElement("select", Object.assign({ className: cls }, others), data.length > 0 ? this.renderData(data) : children));
    }
}
Select.propTypes = {
    /**
     * object arrays of options, `value` and `label` properties is required
     *
     */
    data: PropTypes.array
};
Select.defaultProps = {
    data: []
};
;
