/*
 * @Author: 刘佑祥
 * @LastEditors: 刘佑祥
 * @LastEditTime: 2020-07-16 17:23:52
 */ 
import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Heading for `Cells`
 *
 */
interface CellsTitleProps {
  className?: any,
  children?: React.ReactNode,
  style?: React.CSSProperties,
}
const CellsTitle = (props: CellsTitleProps) => {
    const { className, children, ...others } = props
    const cls = classNames({
        'weui-cells__title': true,
        [className]: className
    })

    return (
        <div className={cls} { ...others }>{ children }</div>
    )
}

export default CellsTitle