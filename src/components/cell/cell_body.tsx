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
  style?: React.CSSProperties
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
