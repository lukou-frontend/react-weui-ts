import * as React from 'react';
import classNames from '../../utils/classnames';
const CellsTips = (props) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-cells__tips': true,
        [className]: className
    });
    return (React.createElement("div", Object.assign({ className: cls }, others), children));
};
export default CellsTips;
