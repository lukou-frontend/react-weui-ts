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
    title?: string;
    className?: any;
    onFileClick?: (e?: any, file?: File, idx?: any) => void;
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
export default class Uploader extends React.Component<UploaderProps> {
    static propTypes: {
        /**
         * title of uploader
         *
         */
        title: PropTypes.Requireable<string>;
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
         * array of photos thumbnails to indicator status, include property `url`, `status`, `error`
         *
         */
        files: PropTypes.Requireable<any[]>;
        /**
         * languages object, with property `maxError`
         *
         */
        lang: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        title: string | undefined;
        maxCount: number;
        maxWidth: number;
        files: MyFile[];
        onChange: ((file: File, event?: any) => void) | undefined;
        onError: (error: any) => void;
        lang: Lang;
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