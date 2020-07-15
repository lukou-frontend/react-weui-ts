import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
interface IProps {
  transparent?: boolean,
  className?: any,
  [key: string]: any
}
class Mask extends React.Component<IProps> {

    static defaultProps = {
        transparent: false
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
