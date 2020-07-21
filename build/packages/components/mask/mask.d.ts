import * as React from 'react';
/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
interface MaskProps {
    transparent?: boolean;
    className?: any;
    [key: string]: any;
}
declare class Mask extends React.Component<MaskProps> {
    static defaultProps: {
        transparent: boolean | undefined;
    };
    render(): JSX.Element;
}
export default Mask;
