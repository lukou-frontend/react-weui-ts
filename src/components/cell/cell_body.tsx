import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * Content of `Cell`
 *
 */
interface CellBodyProps {
  className?: any,
  children?: React.ReactNode,
  primary?: boolean,
<<<<<<< HEAD
  style?: React.CSSProperties
=======
  style?: React.CSSProperties,
>>>>>>> cb04d572b814b626a65c9c2e3fe8db6eb459ebd6
}
const CellBody = (props: CellBodyProps) => {
    const { className, children, primary, ...others } = props;
    const cls = classNames({
        'weui-cell__bd': true,
        'weui-cell_primary': primary,
        [className]: className
    });

    return (
        <div className={cls} {...others}>{ children }</div>
    );
};

CellBody.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: PropTypes.bool,
};

CellBody.defaultProps = {
    primary: false,
};

export default CellBody;
