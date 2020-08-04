import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * Full screen photo display
 *
 */
interface GalleryProps {
    defaultIndex: number;
    show?: boolean;
    src?: string | Array<any>;
    className?: any;
    children?: any;
    isVideo: boolean;
    onClick?: (e: any) => void;
}
interface GalleryStates {
    currentIndex: number;
}
declare class Gallery extends React.Component<GalleryProps, GalleryStates> {
    static propTypes: {
        /**
         * indicate whather the component is display
         *
         */
        show: PropTypes.Requireable<boolean>;
        /**
         * image source, string for single element, array for multiple element
         *
         */
        src: PropTypes.Requireable<string | any[]>;
        /**
         * indicate whather the component is display
         *
         */
        defaultIndex: PropTypes.Requireable<number>;
        /**
         * 是否为视频
         *
         */
        isVideo: PropTypes.Requireable<boolean>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        show: boolean | undefined;
        src: string | any[] | undefined;
        defaultIndex: number;
        isVideo: boolean;
    };
    constructor(props: GalleryProps);
    handleClick(func: (arg0: any, arg1: number) => void): (e: any) => void;
    renderImages(imgs: any[]): JSX.Element;
    renderVideos(videos: any[]): JSX.Element;
    renderOprs(): false | React.DetailedReactHTMLElement<{
        key: number;
        onClick: (e: any) => void;
    }, HTMLElement>[] | React.DetailedReactHTMLElement<{
        onClick: (e: any) => void;
    }, HTMLElement>;
    render(): false | JSX.Element;
}
export default Gallery;
