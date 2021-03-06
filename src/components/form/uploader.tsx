import * as React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import classNames from '../../utils/classnames';
import deprecationWarning from '../../utils/deprecationWarning';

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
type CustomFile = {
    nativeFile: Blob;
    lastModified: number;
    lastModifiedDate: Date;
    data: string;
    name: string;
    size: number;
    type: string;
};
type HandleFileCallback = (
    file: CustomFile | Blob,
    e: RenderOnloadEvent,
) => void;
type RenderOnloadEvent = {
    target: { result: any };
};
export default class Uploader extends React.Component<UploaderProps> {
    private uploaderRef = React.createRef<HTMLInputElement>();

    static propTypes = {
        /**
         * max amount of allow file
         *
         */
        maxCount: PropTypes.number,
        /**
         * maxWidth of image for uploader to compress
         *
         */
        maxWidth: PropTypes.number,
        /**
         * 文件大小上限(单位：M)
         *
         */
        maxsize: PropTypes.number,
        /**
         * when file change, pass property `(event, file)`
         *
         */
        onChange: PropTypes.func,
        /**
         * when there is error, pass property `msg`
         *
         */
        onError: PropTypes.func,
        /**
         * 文件大小超出限制触发
         *
         */
        onOversize: PropTypes.func,
        /**
         * 删除文件触发，参数为file和id
         *
         */
        onDelete: PropTypes.func,
        /**
         * array of photos thumbnails to indicator status, include property `url`, `status`, `error`
         *
         */
        files: PropTypes.array,
        /**
         * languages object, with property `maxError`
         *
         */
        lang: PropTypes.object,
        /**
         * 接收文件类型(取值为'image'时上传图片，为'video'时上传视频)
         *
         */
        type: PropTypes.string,
        /**
         * 参数为当前视频src
         *
         */
        currentVideo: PropTypes.func,
        /**
         * 是否展示标题
         *
         */
        showTitle: PropTypes.bool,
        /**
         * 图片和视频的预览图宽高:small|normal|large
         *
         */
        size: PropTypes.string,
        /**
         * 是否显示上传文件的按钮
         *
         */
        showAddInput: PropTypes.bool,
    };

    static defaultProps = {
        maxCount: 4 as UploaderProps['maxCount'],
        maxWidth: 500 as UploaderProps['maxWidth'],
        files: [] as UploaderProps['files'],
        onChange: undefined as UploaderProps['onChange'],
        onError: (undefined as unknown) as UploaderProps['onError'],
        onOversize: (undefined as any) as UploaderProps['onOversize'],
        onDelete: (undefined as any) as UploaderProps['onDelete'],
        lang: {
            maxError: (maxCount) => `最多只能上传${maxCount}张图片`,
        } as UploaderProps['lang'],
        type: 'image' as UploaderProps['type'],
        currentVideo: (undefined as unknown) as UploaderProps['currentVideo'],
        showTitle: false as UploaderProps['showTitle'],
        size: 'normal' as UploaderProps['size'],
    };

    getImageSize() {
        let size;
        if (this.props.size === 'small') {
            size = 57;
        } else if (this.props.size === 'normal') {
            size = 76;
        } else if (this.props.size === 'large') {
            size = 106;
        } else {
            return 76;
        }
        return size;
    }

    /**
     * Detecting vertical squash in loaded image.
     * Fixes a bug which squash image vertically while drawing into canvas for some images.
     * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
     * With react fix by n7best
     */

    // eslint-disable-next-line class-methods-use-this
    detectVerticalSquash(img: any) {
        let data;
        const ih = img.naturalHeight;
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = ih;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        try {
            // Prevent cross origin error
            data = ctx.getImageData(0, 0, 1, ih).data;
        } catch (err) {
            // hopeless, assume the image is well and good.
            console.log('Cannot check verticalSquash: CORS?');
            // eslint-disable-next-line consistent-return
            return 1;
        }
        // search image edge pixel position in case it is squashed vertically.
        let sy = 0;
        let ey = ih;
        let py = ih;
        while (py > sy) {
            const alpha = data[(py - 1) * 4 + 3];
            if (alpha === 0) {
                ey = py;
            } else {
                sy = py;
            }
            // eslint-disable-next-line no-bitwise
            py = (ey + sy) >> 1;
        }
        const ratio = py / ih;
        // eslint-disable-next-line consistent-return
        return ratio === 0 ? 1 : ratio;
    }

    handleFile(file: Blob, cb: HandleFileCallback) {
        let reader: any;
        if (typeof FileReader !== 'undefined') {
            reader = new FileReader();
        } else if (window.FileReader) {
            reader = new window.FileReader();
        }

        reader.onload = (e: RenderOnloadEvent) => {
            if (/image/g.test(file.type)) {
                let img: any;
                if (typeof img !== 'undefined') {
                    img = new Image();
                } else if (window.Image) {
                    img = new window.Image();
                }
                img.onload = () => {
                    const w = Math.min(this.props.maxWidth, img.width);
                    const h = img.height * (w / img.width);
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                        const { drawImage } = ctx;
                        const newDrawImage = (
                            _img: CanvasImageSource,
                            sx: number,
                            sy: number,
                            sw: number,
                            sh: number,
                            dx?: number,
                            dy?: number,
                            dw?: number,
                            dh?: number,
                        ) => {
                            let vertSquashRatio = 1;
                            let newSw = sw;
                            let newSh = sh;
                            if (
                                !!_img &&
                                (_img as HTMLImageElement).nodeName === 'IMG'
                            ) {
                                vertSquashRatio = this.detectVerticalSquash(
                                    _img,
                                ) as number;
                                if (typeof newSw === 'undefined')
                                    newSw = (_img as HTMLImageElement)
                                        .naturalWidth;
                                if (typeof newSh === 'undefined')
                                    newSh = (_img as HTMLImageElement)
                                        .naturalHeight;
                            }
                            if (arguments.length === 9)
                                drawImage.call(
                                    ctx,
                                    _img,
                                    sx,
                                    sy,
                                    newSw,
                                    newSh,
                                    dx,
                                    dy,
                                    dw,
                                    dh! / vertSquashRatio,
                                );
                            else if (typeof newSw !== 'undefined')
                                drawImage.call(
                                    ctx,
                                    _img,
                                    sx,
                                    sy,
                                    newSw,
                                    newSh / vertSquashRatio,
                                );
                            else drawImage.call(ctx, _img, sx, sy);
                        };

                        canvas.width = w;
                        canvas.height = h;
                        newDrawImage(img, 0, 0, w, h);

                        const base64 = canvas.toDataURL('image/png');

                        cb(
                            {
                                nativeFile: file,
                                lastModified: (file as MyFile).lastModified,
                                lastModifiedDate: (file as MyFile)
                                    .lastModifiedDate,
                                name: (file as MyFile).name,
                                size: file.size,
                                type: file.type,
                                data: base64,
                            },
                            e,
                        );
                    } else {
                        cb(file, e);
                    }
                };
                img.src = e.target.result;
            } else if (/video/g.test(file.type)) {
                const video = document.createElement('video');
                video.src = e.target.result;
                video.width = this.getImageSize();
                video.height = this.getImageSize();
                video.controls = true;
                video.muted = true;
                video.autoplay = true;
                video.preload = 'preload';
                this.props.currentVideo(e.target.result);
                video.addEventListener('loadeddata', function () {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                        canvas.width = this.videoWidth;
                        canvas.height = this.videoHeight;
                        ctx.drawImage(this, 0, 0, 600, 600);
                        const base64 = canvas.toDataURL('image/png');
                        cb(
                            {
                                nativeFile: file,
                                lastModified: (file as MyFile).lastModified,
                                lastModifiedDate: (file as MyFile)
                                    .lastModifiedDate,
                                name: (file as MyFile).name,
                                size: file.size,
                                type: file.type,
                                data: base64,
                            },
                            e,
                        );
                    } else {
                        cb(file, e);
                    }
                });
            }
        };
        reader.readAsDataURL(file);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const langs = this.props.lang;
        const { files } = e.target;

        if (!files || files.length === 0) return;

        if (this.props.files.length >= this.props.maxCount) {
            this.props.onError(langs.maxError(this.props.maxCount));
            return;
        }
        // eslint-disable-next-line no-restricted-syntax
        for (const key in files) {
            if (files.hasOwnProperty(key)) {
                const file = files[key];
                const maxsize =
                    this.props.maxsize ||
                    (this.props.type === 'image' ? 2 : 10);
                if (file.size / (1024 * 1024) > maxsize) {
                    this.props.onOversize(file.size);
                    return;
                }
                this.handleFile(file, (_file: File, _e: RenderOnloadEvent) => {
                    if (this.props.onChange) this.props.onChange(_file, _e);
                    this.uploaderRef.current!.value = '';
                });
            }
        }
    }

    renderFiles() {
        return this.props.files.map((file, idx) => {
            const imgSrc =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAEVElEQVRoQ82Za8ilUxTHf3/3SxhyyS2XSUjJdT64ROMyyDBTIuMyDJFBQmRcx62GEMOUomimMbl8mDEJzQef5DJ8INdkNEoSCkUpLP2nfd6eOec55+xnP+e9rE9v77v2Wr+93rXXXns9oqVExEHATOBo4FBgf2AnYDvgT+AP4Dvga+BD4B1JP7d0i0oMRMS+wHzgMuCwhjYCeA9YDqyS5I01lkbgEXEgcBdwObBNY2+9C34DngaekOSfsyULPCIMeTtwJ7B9tvV8xZ+A2yStyF0yFDwiDgZeBo7LNdpC7zXgakm/D7MxEDwiTgFWA9OGGRrh378BZknyge4rfcEjYjbwSqoOI+TKMvUjcIakz/tp14KnSL81SdAd1h+AEyVtrIPvAU85/fEEp0e/wDriMyT91a2wGXiqHu9O0EHMyhngRUlXDgO/G3gw1+IE6p0j6c2qv7GIp8vli8I6/R+wxThu5FvgCEl/d3xUwZ9zDS1w/j5wGuDS+ThweIGNnCXXSXp2M/DUe2wovMaXSrrJBiNiK+AG4L5xONyu64dI+te+NkU8InyVP5yz7RqdMfDO3yJij2RvAbBlod26ZWdJersK/mVBl9cx3ANe2cAxwFLX4xHBr5R06Sbw1E87TUqlL3hlA/OARwG3w23kF2BPSWHwq4DnW1gbCp7SccfUXd7S8kY+StInBn8GuH68wSvRn56qz/mFPhdIesHg64DTC414WVbEu+1HxCzgyYKz9YikOwz+VXorlrIXgaf02Rq4MZXPnTMBXpJ0icHdhe2TuahOrRi8kj6OvrvRHFkr6TyD/wrslrOij84owH1p+e2ZI+sknWnw79NIIWfRSCOeWmi3CXMaOF8taa7BP3MD02Bht2rjiEeES+Mi4NaC0rhc0nyDrwXOnSjwiLg4XUb7Ffq8X9Jigz+Wdl5oJ68cRoQnXb7+Typ1lNbNk7TK4Bem8UOpvYGpEhG7Aw+llnkUDdd0SRsM7k7OA5mhM5YmVSW1uAuBxcCupVHpWrdRkqdpY22t35knFBqva2v9sHiq5aEfWME6/fi1wNjrouEGlklyHXZf78mty9vchjZy1Y+X9FE14r5uPb8omVh53TXAqcDNBeUtF3q9pBkd5eqb8wHgnlwrk6A3R9KaOnBH2w3XXpMANcylz+DJfkD0gKcc9aDeA/epJP8Ax0r6tApVN4J7FbhgCpEvkrSkm6cOfBdgvUcBUwD+DWB2NUVqU6Xzy1TWnFd7TyK8P3TNlOQPYD0yaD7ujtEzjLYv85K9G9rzQr8VamXYF4kDAP+72rS9TcHt76J+kR6YKlVPEbEDsAy4oilBQ31Xj3uBJXU5PfRw9nMWEWen55XHC6MWn6eF3SVvkJNGHWFEbAt4yO5Ph+5L2oqrl2eWr+dEeWAdzyGJCPfVnsX4wvIL3T13rri38dW9otMw5S5sDd51BvxfOxLwgHPYt/wP/AgoAS3O8VE4G6WN/wH0qmQ+I0w9UgAAAABJRU5ErkJggg==';
            const closeSrc =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAB70lEQVRYR82XMUsDMRTH/7mjBSd1FIRqwamgm+KooB3OviLd/SAOioJ+EPciTb2hCnYU3RQ6CdWC4KhOQss1ErnKeb3kUk4wna7k5f1/eXl5eWGw5Mcs4cBEIM1mc1UI4QFYB7AEYDZcyBuARwA3jDG/UqncTbpAI5BGo+E5jnMihFgxFHgQQuxXq1Xf0F4fkXq9Pp/L5c4AbJg6jNm1B4PBXq1We0mbr4yI7/trw+HwXAgxl+ZEN84Ye3UcZ9fzvFutXdKghAiCoA1gKgtEZO6n67obOpixiMjtyOfzd1kjEV+AjEy/319VbdMYCOf8OkNOpAWwTUSbSUa/QOTpYIxdJBm6rosgCNKEvsd1tkKInaTT9AuEc34PYDmuJh2Xy2X0ej10Oh0tTKlUQqFQQKvVUoE/ENFYGfgBCYuVMrOlQLFYRLfbVcKY2MhVMMbW4kXvB4RzfgTgQLdcnZApROj/mIgOo1pRkEsAW2lJkCQ4IYSUuCKibRXIE4CFNBA5HhWW/9O2LMHnMxEtqkDeAUybgERh5LcubxT+PohoxnoQa7bGmmS14/haU9BkBltR4iWINZdeGJX/bwMkiDWNkYSxolUclV0rmucRjBXPieiFFJ6m06TuTXGp/e0DKy7y709O09Ygi53R2zeLgOncL0HKZTDFM68/AAAAAElFTkSuQmCC';
            const { url, error, status, onClick, ...others } = file;
            const wrapStyle: React.CSSProperties = {
                position: 'relative',
                marginRight: 12,
                marginBottom: 9,
                float: 'left',
                width: this.getImageSize(),
                height: this.getImageSize(),
            };
            const fileStyle: React.CSSProperties = {
                backgroundImage: `url(${url})`,
                position: 'relative',
                width: this.getImageSize(),
                height: this.getImageSize(),
            };
            const videofileStyle: React.CSSProperties = {
                backgroundImage: `url(${url})`,
                filter: 'contrast(0.4)',
                width: this.getImageSize(),
                height: this.getImageSize(),
            };
            const iconStyle: React.CSSProperties = {
                position: 'absolute',
                right: '-9px',
                top: '-9px',
                width: '16px',
                height: '16px',
            };
            const btnStyle: React.CSSProperties = {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '22px',
                height: '22px',
            };
            const cls = classNames({
                'weui-uploader__file': true,
                'weui-uploader__file_status': error || status,
            });

            if (onClick) {
                deprecationWarning(
                    'File onClick',
                    'Uploader onFileClick',
                    null,
                );
            }

            const handleFileClick =
                onClick ||
                ((e: any) => {
                    if (this.props.onFileClick)
                        this.props.onFileClick(e, file, idx);
                });
            const handleClick = (e: any) => {
                e.stopPropagation();
                if (this.props.onDelete) this.props.onDelete(file, idx);
            };
            if (this.props.type === 'image') {
                return (
                    <div style={wrapStyle} key={idx}>
                        <li
                            className={cls}
                            key={idx}
                            style={fileStyle}
                            onClick={handleFileClick}
                            {...others}
                        >
                            {error || status ? (
                                <div className="weui-uploader__file-content">
                                    {error ? <Icon value="warn" /> : status}
                                </div>
                            ) : (
                                false
                            )}
                        </li>
                        <img
                            src={closeSrc}
                            style={iconStyle}
                            onClick={handleClick}
                            alt=""
                        />
                    </div>
                );
            }
            return (
                <div style={wrapStyle} key={idx}>
                    <li
                        className={cls}
                        key={idx}
                        style={videofileStyle}
                        onClick={handleFileClick}
                        {...others}
                    >
                        {error || status ? (
                            <div className="weui-uploader__file-content">
                                {error ? <Icon value="warn" /> : status}
                            </div>
                        ) : (
                            false
                        )}
                    </li>
                    <img
                        src={closeSrc}
                        style={iconStyle}
                        onClick={handleClick}
                        alt=""
                    />
                    <img src={imgSrc} style={btnStyle} alt="" />
                </div>
            );
        });
    }

    render() {
        const {
            className,
            maxCount,
            files,
            onChange,
            onFileClick,
            lang,
            onOversize,
            type,
            onDelete,
            currentVideo,
            showTitle,
            size,
            showAddInput,
            ...others
        } = this.props;
        const inputProps = { ...others };
        delete inputProps.onError;
        delete inputProps.maxWidth;

        const cls = classNames({
            'weui-uploader': true,
            [className]: className,
        });

        return (
            <div className={cls}>
                {showTitle ? (
                    <div className="weui-uploader__hd">
                        <div className="weui-uploader__info">
                            {files.length}/{maxCount}
                        </div>
                    </div>
                ) : null}
                <div
                    className="weui-uploader__bd"
                    style={{ overflow: 'visible' }}
                >
                    <ul className="weui-uploader__files">
                        {this.renderFiles()}
                    </ul>
                    <div
                        style={{
                            width: this.getImageSize() - 2,
                            height: this.getImageSize() - 2,
                            display: showAddInput === true ? 'block' : 'none',
                        }}
                        className="weui-uploader__input-box"
                    >
                        <input
                            ref={this.uploaderRef} //let react to reset after onchange
                            className="weui-uploader__input"
                            type="file"
                            accept={type === 'image' ? 'image/*' : 'video/*'}
                            onChange={this.handleChange.bind(this)}
                            {...inputProps}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
