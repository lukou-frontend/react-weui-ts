import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
interface MaskProps {
  transparent?: boolean,
  className?: any,
  [key: string]: any
}
class Mask extends React.Component<MaskProps> {

    static defaultProps = {
        transparent: false as MaskProps['transparent']
    };

    render() {
        const {transparent, className, ...others} = this.props;
        const clz = classNames({
            'weui-mask': !transparent,
            'weui-mask_transparent': transparent
        }, className);

        return (
            <div className={clz} {...others}></div>
        );
    }
}

export default Mask;
