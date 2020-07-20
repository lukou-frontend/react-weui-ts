import * as React from 'react';
interface PreviewButtonProps {
    className?: string;
    primary: boolean;
    children: React.ReactNode;
    [key: string]: any;
}
declare const PreviewButton: {
    (props: PreviewButtonProps): JSX.Element;
    defaultProps: {
        primary: boolean;
    };
};
export default PreviewButton;
