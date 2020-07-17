import * as React from 'react';
import classNames from '../../utils/classnames';
class Mask extends React.Component {
    render() {
        const { transparent, className, ...others } = this.props;
        const clz = classNames({
            'weui-mask': !transparent,
            'weui-mask_transparent': transparent
        }, className);
        return (React.createElement("div", Object.assign({ className: clz }, others)));
    }
}
Mask.defaultProps = {
    transparent: false
};
export default Mask;
