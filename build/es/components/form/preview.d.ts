import * as React from 'react';
/**
 * Preview Wrapper consists of `PreviewHeader`, `PreviewBody`, `PreviewFooter`, `PreviewItem`
 *
 */
interface PreviewProps {
    className?: any;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    [key: string]: any;
}
declare const Preview: (props: PreviewProps) => JSX.Element;
export default Preview;
