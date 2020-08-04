import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * Footer of `Cell`
 *
 */
interface CellFooterProps {
  className?: any,
  primary?: boolean,
  children?: React.ReactNode,
<<<<<<< HEAD
  style?: React.CSSProperties
=======
  style?: React.CSSProperties,
>>>>>>> cb04d572b814b626a65c9c2e3fe8db6eb459ebd6
}
const CellFooter = (props: CellFooterProps) => {
    const { className, children, primary, ...others } = props;
    const cls = classNames({
        'weui-cell__ft': true,
        'weui-cell_primary': primary,
        [className]: className
    });

    return (
        <div className={ cls } { ...others }>{ children }</div>
    );
};

CellFooter.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: PropTypes.bool,
};

CellFooter.defaultProps = {
    primary: false as CellFooterProps['primary'],
};

export default CellFooter;
