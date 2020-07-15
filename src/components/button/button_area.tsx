import * as React from 'react';
import classNames from '../../utils/classnames';

interface IProps {
  direction: 'veritical'|'horizontal',
  className: string
}
class ButtonArea extends React.Component<IProps> {

    static defaultProps = {
        direction: 'vertical'
    };

    render() {
        const {direction, children, className} = this.props;
        const cls = classNames({
            'weui-btn-area': true,
            'weui-btn-area_inline': direction === 'horizontal',
            [className]: className
        });

        return (
            <div className={cls}>
                {children}
            </div>
        );
    }
};

export default ButtonArea;
