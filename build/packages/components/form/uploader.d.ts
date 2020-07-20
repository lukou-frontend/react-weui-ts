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
    maxsize: number;
    onOversize: (val: number) => void;
    accepted: 'image/*' | 'vedio/*';
}
interface UploaderStates {
    videoLength: number;
}
declare type customFile = {
    nativeFile: Blob;
    lastModified: number;
    lastModifiedDate: Date;
    data: string;
    name: string;
    size: number;
    type: string;
};
declare type handleFileCallback = (file: customFile | Blob, e: renderOnloadEvent) => void;
declare type renderOnloadEvent = {
    target: {
        result: any;
    };
};
export default class Uploader extends React.Component<UploaderProps, UploaderStates> {
    constructor(props: UploaderProps);
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
         * 接收文件类型(取值为'image/*'时上传图片，为'video/*'时上传视频)
         *
         */
        accepted: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        maxCount: number;
        maxsize: number;
        maxWidth: number;
        files: MyFile[];
        onChange: ((file: File, event?: any) => void) | undefined;
        onError: (error: any) => void;
        onOversize: (val: number) => void;
        lang: Lang;
        accepted: string;
    };
    /**
     * Detecting vertical squash in loaded image.
     * Fixes a bug which squash image vertically while drawing into canvas for some images.
     * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
     * With react fix by n7best
     */
    detectVerticalSquash(img: any): number | undefined;
    handleFile(file: Blob, cb: handleFileCallback): void;
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    renderFiles(): JSX.Element[];
    render(): JSX.Element;
}
export {};
