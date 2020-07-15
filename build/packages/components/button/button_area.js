import * as React from 'react';
import classNames from '../../utils/classnames';
class ButtonArea extends React.Component {
    render() {
        const { direction, children, className } = this.props;
        const cls = classNames({
            'weui-btn-area': true,
            'weui-btn-area_inline': direction === 'horizontal',
            [className]: className
        });
        return (React.createElement("div", { className: cls }, children));
    }
}
ButtonArea.defaultProps = {
    direction: 'vertical'
};
;
export default ButtonArea;
