/// <reference types="react" />
/**
 * Wrapper for Gallery Delete Button
 *
 */
interface GalleryDeleteProps {
    className?: any;
    onClick?: (e: Event, i: number) => void;
}
declare const GalleryDelete: (props: GalleryDeleteProps) => JSX.Element;
export default GalleryDelete;
