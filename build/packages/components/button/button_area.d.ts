import * as React from 'react';
interface ButtonAreaProps {
    direction: 'veritical' | 'horizontal';
    className?: string;
}
declare class ButtonArea extends React.Component<ButtonAreaProps> {
    static defaultProps: {
        direction: string;
    };
    render(): JSX.Element;
}
export default ButtonArea;
