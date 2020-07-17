import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
const CellFooter = (props) => {
    const { className, children, primary, ...others } = props;
    const cls = classNames({
        'weui-cell__ft': true,
        'weui-cell_primary': primary,
        [className]: className
    });
    return (React.createElement("div", Object.assign({ className: cls }, others), children));
};
CellFooter.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: PropTypes.bool,
};
CellFooter.defaultProps = {
    primary: false,
};
export default CellFooter;
