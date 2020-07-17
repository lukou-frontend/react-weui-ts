import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
class Form extends React.Component {
    render() {
        const { children, className, radio, checkbox, ...others } = this.props;
        const cls = classNames({
            'weui-cells': true,
            'weui-cells_form': !radio && !checkbox,
            'weui-cells_radio': radio,
            'weui-cells_checkbox': checkbox,
            [className]: className
        });
        return (React.createElement("div", Object.assign({ className: cls }, others), children));
    }
}
Form.propTypes = {
    /**
     * if this form is use for radios
     *
     */
    radio: PropTypes.bool,
    /**
     * if this form is use for checkbox
     *
     */
    checkbox: PropTypes.bool
};
Form.defaultProps = {
    radio: false,
    checkbox: false
};
;
export default Form;
