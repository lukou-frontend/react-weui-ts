import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
interface MaskProps {
    transparent?: boolean;
    className?: any;
    [key: string]: any;
}
function Mask(props: MaskProps) {
    const { transparent, className, ...others } = props;
    const clz = classNames(
        {
            'weui-mask': !transparent,
            'weui-mask_transparent': transparent,
        },
        className,
    );

    return <div className={clz} {...others} />;
}
Mask.defaultProps = {
    transparent: false as MaskProps['transparent'],
};
export default Mask;
