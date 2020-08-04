import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Footer Information for `Cells`
 *
 */
interface CellsTipsProps {
  className?: any,
  children?: React.ReactNode,
  style?: React.CSSProperties,
}
const CellsTips = (props: CellsTipsProps) => {
    const { className, children, ...others } = props;
    const cls = classNames({
        'weui-cells__tips': true,
        [className]: className
    });

    return (
        <div className={cls} { ...others }>{ children }</div>
    );
};

export default CellsTips;