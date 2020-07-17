//1.0.0 components
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
const PreviewItem = (props) => {
    const { className, label, value, ...others } = props;
    const cls = classNames({
        'weui-form-preview__item': true,
        [className]: className
    });
    return (React.createElement("div", Object.assign({ className: cls }, others),
        React.createElement("label", { className: "weui-form-preview__label" }, label),
        React.createElement("em", { className: "weui-form-preview__value" }, value)));
};
PreviewItem.propTypes = {
    /**
     * The label of item
     *
     */
    label: PropTypes.string,
    /**
     * Value of the label
     *
     */
    value: PropTypes.string,
};
PreviewItem.defaultProps = {
    label: false,
    value: false,
};
export default PreviewItem;
