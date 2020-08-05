import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * weui style uploader
 *
 */
interface Lang {
    maxError: (value: number) => void;
}
interface MyFile extends File {
    lastModifiedDate: Date;
    error?: any;
    url?: string;
    status: any;
    onClick?: () => void;
    video: string;
}
interface UploaderProps {
    files: Array<MyFile>;
    lang: Lang;
    maxCount: number;
    maxWidth: number;
    onChange?: (file: File, event?: any) => void;
    onError: (error: any) => void;
    className?: any;
    onFileClick?: (e?: any, file?: File, idx?: any) => void;
    maxsize?: number;
    onOversize: (val: number) => void;
    type: 'image' | 'video';
    onDelete: (file: File, id: number) => void;
    currentVideo: (val: string) => void;
    showTitle: boolean;
    size: 'small' | 'normal' | 'large';
    showAddInput: boolean;
    style?: React.CSSProperties;
}
declare type CustomFile = {
    nativeFile: Blob;
    lastModified: number;
    lastModifiedDate: Date;
    data: string;
    name: string;
    size: number;
    type: string;
};
declare type HandleFileCallback = (file: CustomFile | Blob, e: RenderOnloadEvent) => void;
declare type RenderOnloadEvent = {
    target: {
        result: any;
    };
};
export default class Uploader extends React.Component<UploaderProps> {
    private uploaderRef;
    static propTypes: {
        /**
         * max amount of allow file
         *
         */
        maxCount: PropTypes.Requireable<number>;
        /**
         * maxWidth of image for uploader to compress
         *
         */
        maxWidth: PropTypes.Requireable<number>;
        /**
         * 文件大小上限(单位：M)
         *
         */
        maxsize: PropTypes.Requireable<number>;
        /**
         * when file change, pass property `(event, file)`
         *
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * when there is error, pass property `msg`
         *
         */
        onError: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 文件大小超出限制触发
         *
         */
        onOversize: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 删除文件触发，参数为file和id
         *
         */
        onDelete: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * array of photos thumbnails to indicator status, include property `url`, `status`, `error`
         *
         */
        files: PropTypes.Requireable<any[]>;
        /**
         * languages object, with property `maxError`
         *
         */
        lang: PropTypes.Requireable<object>;
        /**
         * 接收文件类型(取值为'image'时上传图片，为'video'时上传视频)
         *
         */
        type: PropTypes.Requireable<string>;
        /**
         * 参数为当前视频src
         *
         */
        currentVideo: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 是否展示标题
         *
         */
        showTitle: PropTypes.Requireable<boolean>;
        /**
         * 图片和视频的预览图宽高:small|normal|large
         *
         */
        size: PropTypes.Requireable<string>;
        /**
         * 是否显示上传文件的按钮
         *
         */
        showAddInput: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        maxCount: number;
        maxWidth: number;
        files: MyFile[];
        onChange: ((file: File, event?: any) => void) | undefined;
        onError: (error: any) => void;
        onOversize: (val: number) => void;
        onDelete: (file: File, id: number) => void;
        lang: Lang;
        type: "video" | "image";
        currentVideo: (val: string) => void;
        showTitle: boolean;
        size: "small" | "normal" | "large";
    };
    getImageSize(): any;
    /**
     * Detecting vertical squash in loaded image.
     * Fixes a bug which squash image vertically while drawing into canvas for some images.
     * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
     * With react fix by n7best
     */
    detectVerticalSquash(img: any): number | undefined;
    handleFile(file: Blob, cb: HandleFileCallback): void;
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    renderFiles(): JSX.Element[];
    render(): JSX.Element;
}
export {};
