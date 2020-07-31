//1.0.0 components

import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * Preview Item for all purpose usage
 *
 */
interface PreviewItemProps {
  className?: any,
  label?: string,
  value?: string,
  children?: React.ReactNode
}
const PreviewItem = (props: PreviewItemProps) => {

    const { className, label, value, ...others } = props;
    const cls = classNames({
        'weui-form-preview__item': true,
        [className]: className
    });

    return (
        <div className={cls} {...others}>
            <label className="weui-form-preview__label">{label}</label>
            <em className="weui-form-preview__value">{value}</em>
        </div>
    );
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
    label: '' as PreviewItemProps['label'],
    value: '' as PreviewItemProps['value'],
};

export default PreviewItem;
