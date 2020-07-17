import * as React from 'react';
/**
 * Header of MediaBox, if detects Img tag inside content will automatically adds corresponding class
 *
 */
interface MediaBoxHeaderProps {
    className?: '';
}
export default class MediaBoxHeader extends React.Component<MediaBoxHeaderProps> {
    render(): JSX.Element;
}
export {};
