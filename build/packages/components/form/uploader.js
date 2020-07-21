import * as React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Icon from '../icon';
import classNames from '../../utils/classnames';
import deprecationWarning from '../../utils/deprecationWarning';
export default class Uploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoLength: document.querySelectorAll('ul li img').length
        };
    }
    /**
     * Detecting vertical squash in loaded image.
     * Fixes a bug which squash image vertically while drawing into canvas for some images.
     * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
     * With react fix by n7best
     */
    detectVerticalSquash(img) {
        let data;
        let ih = img.naturalHeight;
        let canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = ih;
        let ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        ctx.drawImage(img, 0, 0);
        try {
            // Prevent cross origin error
            data = ctx.getImageData(0, 0, 1, ih).data;
        }
        catch (err) {
            // hopeless, assume the image is well and good.
            console.log('Cannot check verticalSquash: CORS?');
            return 1;
        }
        // search image edge pixel position in case it is squashed vertically.
        let sy = 0;
        let ey = ih;
        let py = ih;
        while (py > sy) {
            let alpha = data[(py - 1) * 4 + 3];
            if (alpha === 0) {
                ey = py;
            }
            else {
                sy = py;
            }
            py = (ey + sy) >> 1;
        }
        let ratio = (py / ih);
        return (ratio === 0) ? 1 : ratio;
    }
    handleFile(file, cb) {
        let reader;
        if (typeof FileReader !== 'undefined') {
            reader = new FileReader();
        }
        else {
            if (window.FileReader)
                reader = new window.FileReader();
        }
        reader.onload = (e) => {
            if (/image/g.test(file.type)) {
                let img;
                if (typeof img !== 'undefined') {
                    img = new Image();
                }
                else {
                    if (window.Image)
                        img = new window.Image();
                }
                img.onload = () => {
                    let w = Math.min(this.props.maxWidth, img.width);
                    let h = img.height * (w / img.width);
                    let canvas = document.createElement('canvas');
                    let ctx = canvas.getContext('2d');
                    if (ctx) {
                        let drawImage = ctx.drawImage;
                        const newDrawImage = (_img, sx, sy, sw, sh, dx, dy, dw, dh) => {
                            let vertSquashRatio = 1;
                            if (!!_img && _img.nodeName === 'IMG') {
                                vertSquashRatio = this.detectVerticalSquash(_img);
                                if (typeof sw === 'undefined')
                                    (sw = _img.naturalWidth);
                                if (typeof sh === 'undefined')
                                    (sh = _img.naturalHeight);
                            }
                            if (arguments.length === 9)
                                drawImage.call(ctx, _img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
                            else if (typeof sw !== 'undefined')
                                drawImage.call(ctx, _img, sx, sy, sw, sh / vertSquashRatio);
                            else
                                drawImage.call(ctx, _img, sx, sy);
                        };
                        canvas.width = w;
                        canvas.height = h;
                        newDrawImage(img, 0, 0, w, h);
                        let base64 = canvas.toDataURL('image/png');
                        cb({
                            nativeFile: file,
                            lastModified: file.lastModified,
                            lastModifiedDate: file.lastModifiedDate,
                            name: file.name,
                            size: file.size,
                            type: file.type,
                            data: base64
                        }, e);
                    }
                    else {
                        cb(file, e);
                    }
                };
                img.src = e.target.result;
            }
            else if (/video/g.test(file.type)) {
                let video = document.createElement('video');
                video.src = e.target.result;
                video.width = 79;
                video.height = 79;
                video.controls = true;
                video.muted = true;
                video.autoplay = true;
                video.preload = 'preload';
                video.style.display = 'none';
                video.addEventListener('loadeddata', function () {
                    let canvas = document.createElement('canvas');
                    let ctx = canvas.getContext('2d');
                    if (ctx) {
                        canvas.width = this.videoWidth;
                        canvas.height = this.videoHeight;
                        ctx.drawImage(this, 0, 0, 600, 600);
                        let base64 = canvas.toDataURL('image/png');
                        cb({
                            nativeFile: file,
                            lastModified: file.lastModified,
                            lastModifiedDate: file.lastModifiedDate,
                            name: file.name,
                            size: file.size,
                            type: file.type,
                            data: base64
                        }, e);
                    }
                    else {
                        cb(file, e);
                    }
                });
            }
        };
        reader.readAsDataURL(file);
    }
    handleChange(e) {
        const langs = this.props.lang;
        let _files = e.target.files;
        if (!_files || _files.length === 0)
            return;
        if (this.props.files.length + this.state.videoLength >= this.props.maxCount) {
            this.props.onError(langs.maxError(this.props.maxCount));
            return;
        }
        for (let key in _files) {
            if (!_files.hasOwnProperty(key))
                continue;
            let file = _files[key];
            if (file.size / (1024 * 1024) > this.props.maxsize) {
                this.props.onOversize(file.size);
                return;
            }
            this.handleFile(file, (_file, _e) => {
                if (this.props.onChange)
                    this.props.onChange(_file, _e);
                ReactDOM.findDOMNode(this.refs.uploader);
            });
        }
    }
    renderFiles() {
        return this.props.files.map((file, idx) => {
            console.log(file);
            let imgSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAE+ElEQVRoQ8WZaYydYxTHf3/7vm+JtYJaYm8RGjtDU0vSWGeoftDaihD7rkHiI0opCZEWCWqJkEnoB7EEQRqhRWINsaugCDnynzx38s6du7zvc++dOcnN5E7e53l+9+Q85/zPeUWHFhETgCOBfYGJwLbA+sBawB/Ab8BnwHLgLWCJpB86PBblbBAR6wG7p89OgD/bAJsDGyXo1YB/gL+An4HvgS+BT4FPgA+BZZL8TGWrBB4RqwDrANsDZwCnAjtXPDWAt4EngKcAe3+lJP+/tFUF3xI4DZgK7ABsDdj7Ve0X4Ovk+cXAYkkOq9JWCjx5elfgUOCU9Neh0KkZ9qXk+dclfVF2w7LgawCXAVeli7dq2QPaPOfw+A/4BrhG0qKy+7YFj4jNgPOAE1Pm6Ian6/lWAm8CjwOPSvL3ltYSPCI2SKnuDsCh0mtbAtzktCnp71aHtQM/AHgQ2AVYs9fUwO8p18+Q5Mvb1JqCR4RhLwfOTnl5DLiHjvgJmAfc06pQNQSPCFe9M4F7x8jT9U5xsTodeFXSv4081gx8b+ChdBlddMbaXE1fBmZK+q4UeERYZ1wBXA2sPtbEhfNcpK4EHm7k9VEejwjrDpdka47xNuuZAyX50o6wEeAR4Rx9J3Ah4KIz3rYiFab72oE7kzyf0t94Q9fOHwT6Jf1YBKr3+KXJ4+MZ2/UOcxWdJumVhuARsTHwZKqUVb1tzdFWPlTdtPD8fGBO8ZIOHxYRk5w3M4qNPeIOx/LWsrcXFfYrYHIxNRbBbwWuA6rm7Q+A84H9gUsAt3LdNuuWAUmOiCEbAo+IdZMunpJx4rOpE3IanQ4cA1jjdNvzC4DZtU6pBu5uxs1sTgq8S5I9bQc4nc5yCgO2yNyvme/cZEysqcYa+ADwSEaY+JAiuPfb0UUDOAc4KnPPRvB/AlMkvVcMFSd4Nws5NgxeW5x0fH8KnX2ATXM2brDmXEmW2cMxvhTYM3PzRuD2vGN8cqoLB2XuXb/MumXmEHhE2BuecziP59go8ILnPWdxg30CcFIX9M+7wCRfUINbwr6fQ5zWNAUv/IA+wFXZZznXV025ta1+9eDJowyDW7A/1mPwDdMc5gJgRgep0hOBPSQtN/i1wG29BE+p0qn2iBQ2x2ZMwGqIfZIGDW4dMLvX4IWwcc1wJ+9xh6cIVccdsyQtMPgz6eLksreN8eLGEeHZo+Xz8UkqeLpbxW6UNNfgrwEHV1lZ92wl8ILnnX4d74cDe1VoE++WdLHBl6W5di57LrhzveN+DnBDCpsyDIsk9Rv88zQ2LrOo0TNZ4OnCOi3uZuWXmvMyDE9Lmm7wb4Gtyqxo8kw2eCFsTvaouSTDC5KmGdy9XCdaohvg1kmjGuImP2RQUt+4ejy1i84uZwHHVfX4mMd4elFgbeTM4gLo5qOsDcf4Rx2OkCuHSkSsnbxspeecvklZamChpAGHyhtAJ7KzEnialFkx1tq8qqOQeZIuMvhzST9U+NEjHi0FnsLD5d2i7vb04ivnzJsl3WLw+1OfmLOJ15QFd/fvds4Cy/LW4ZJjbpgfMPj1wNycHdKaluAR4eroN86HJW3iF7ud2FRJLxrcA/yFHezUDtw1wpnD3s5Rg/Vo7vQ/Nvh+wDsdjNAagqeYPgRwVTw6pb5Ox3SemU+QtMLgzqcecXkolGONmmWP47ZL6s9V0Z7uhi2V5PvB/xhloz72A4RfAAAAAElFTkSuQmCC";
            let { url, error, status, onClick, ...others } = file;
            let fileStyle = {
                backgroundImage: `url(${url})`,
                position: 'relative'
            };
            let videofileStyle = {
                backgroundImage: `url(${url})`,
                position: 'relative',
                filter: 'brightness(50%)'
            };
            let iconStyle = {
                position: 'absolute',
                right: '-1px',
                top: 0
            };
            let btnStyle = {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            };
            let cls = classNames({
                'weui-uploader__file': true,
                'weui-uploader__file_status': error || status
            });
            if (onClick) {
                deprecationWarning('File onClick', 'Uploader onFileClick', null);
            }
            let handleFileClick = onClick ? onClick : (e) => {
                if (this.props.onFileClick)
                    this.props.onFileClick(e, file, idx);
            };
            let handleClick = (e) => {
                e.stopPropagation();
                if (this.props.onDelete)
                    this.props.onDelete(file, idx);
            };
            if (this.props.type === 'image') {
                return (React.createElement("li", Object.assign({ className: cls, key: idx, style: fileStyle, onClick: handleFileClick }, others),
                    React.createElement(Icon, { value: "clear", style: iconStyle, onClick: handleClick }),
                    error || status ?
                        React.createElement("div", { className: "weui-uploader__file-content" }, error ? React.createElement(Icon, { value: "warn" }) : status)
                        : false));
            }
            else {
                return (React.createElement("li", Object.assign({ className: cls, key: idx, style: videofileStyle, onClick: handleFileClick }, others),
                    React.createElement(Icon, { value: "clear", style: iconStyle, onClick: handleClick }),
                    React.createElement("img", { src: imgSrc, style: btnStyle }),
                    error || status ?
                        React.createElement("div", { className: "weui-uploader__file-content" }, error ? React.createElement(Icon, { value: "warn" }) : status)
                        : false));
            }
        });
    }
    render() {
        const { className, maxCount, files, onChange, onFileClick, lang, maxsize, onOversize, type, ...others } = this.props;
        const inputProps = Object.assign({}, others);
        delete inputProps.onError;
        delete inputProps.maxWidth;
        const cls = classNames({
            'weui-uploader': true,
            [className]: className
        });
        return (React.createElement("div", { className: cls },
            React.createElement("div", { className: "weui-uploader__hd" },
                React.createElement("div", { className: "weui-uploader__info" },
                    files.length + this.state.videoLength,
                    "/",
                    maxCount)),
            React.createElement("div", { className: "weui-uploader__bd" },
                React.createElement("ul", { className: "weui-uploader__files" }, this.renderFiles()),
                React.createElement("div", { className: "weui-uploader__input-box" },
                    React.createElement("input", Object.assign({ ref: "uploader" //let react to reset after onchange
                        , className: "weui-uploader__input", type: "file", accept: type === 'image' ? 'image/*' : 'video/*', onChange: this.handleChange.bind(this) }, inputProps))))));
    }
}
Uploader.propTypes = {
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
};
Uploader.defaultProps = {
    maxCount: 4,
    maxsize: 5,
    maxWidth: 500,
    files: [],
    onChange: undefined,
    onError: undefined,
    onOversize: undefined,
    onDelete: undefined,
    lang: { maxError: maxCount => `最多只能上传${maxCount}张图片` },
    type: 'image',
};
;
