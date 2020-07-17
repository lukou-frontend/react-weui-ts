import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * Header of `Cell`
 *
 */
interface CellHeaderProps {
  className?: any,
  primary?: boolean,
  children?: React.ReactNode
}
const CellHeader = (props: CellHeaderProps) => {
    const { className, children, primary, ...others } = props;
    const cls = classNames({
        'weui-cell__hd': true,
        'weui-cell_primary': primary,
        [className]: className
    });

    return (
        <div className={ cls } { ...others }>{ children }</div>
    );
};

CellHeader.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: PropTypes.bool,
};

CellHeader.defaultProps = {
    primary: false as CellHeaderProps['primary'],
};

export default CellHeader;
