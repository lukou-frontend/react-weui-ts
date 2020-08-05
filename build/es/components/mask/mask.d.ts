/// <reference types="react" />
/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
interface MaskProps {
    transparent?: boolean;
    className?: any;
    [key: string]: any;
}
declare function Mask(props: MaskProps): JSX.Element;
declare namespace Mask {
    var defaultProps: {
        transparent: boolean | undefined;
    };
}
export default Mask;
