import * as React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Icon from '../icon';
import classNames from '../../utils/classnames';
import deprecationWarning from '../../utils/deprecationWarning';
export default class Uploader extends React.Component {
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
            let img;
            if (typeof Image !== 'undefined') {
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
                //check canvas support, for test
                if (ctx) {
                    //patch subsampling bug
                    //http://jsfiddle.net/gWY2a/24/
                    let drawImage = ctx.drawImage;
                    const newDrawImage = (_img, sx, sy, sw, sh, dx, dy, dw, dh) => {
                        let vertSquashRatio = 1;
                        // Detect if img param is indeed image
                        if (!!_img && _img.nodeName === 'IMG') {
                            vertSquashRatio = this.detectVerticalSquash(_img);
                            if (typeof sw === 'undefined')
                                (sw = _img.naturalWidth);
                            if (typeof sh === 'undefined')
                                (sh = _img.naturalHeight);
                        }
                        // Execute several cases (Firefox does not handle undefined as no param)
                        // by call (apply is bad performance)
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
        };
        reader.readAsDataURL(file);
    }
    handleChange(e) {
        const langs = this.props.lang;
        let _files = e.target.files;
        if (!_files || _files.length === 0)
            return;
        if (this.props.files.length >= this.props.maxCount) {
            this.props.onError(langs.maxError(this.props.maxCount));
            return;
        }
        for (let key in _files) {
            if (!_files.hasOwnProperty(key))
                continue;
            let file = _files[key];
            if (file.size / (1024 * 1024) < this.props.maxsize) {
                this.props.onOversize(file.size);
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
            let { url, error, status, onClick, ...others } = file;
            let fileStyle = {
                backgroundImage: `url(${url})`
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
            return (React.createElement("li", Object.assign({ className: cls, key: idx, style: fileStyle, onClick: handleFileClick }, others), error || status ?
                React.createElement("div", { className: "weui-uploader__file-content" }, error ? React.createElement(Icon, { value: "warn" }) : status)
                : false));
        });
    }
    render() {
        const { className, maxCount, files, onChange, onFileClick, lang, maxsize, onOversize, ...others } = this.props;
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
                    files.length,
                    "/",
                    maxCount)),
            React.createElement("div", { className: "weui-uploader__bd" },
                React.createElement("ul", { className: "weui-uploader__files" }, this.renderFiles()),
                React.createElement("div", { className: "weui-uploader__input-box" },
                    React.createElement("input", Object.assign({ ref: "uploader" //let react to reset after onchange
                        , className: "weui-uploader__input", type: "file", accept: "video/*\uFF5Cimage/*", onChange: this.handleChange.bind(this) }, inputProps))))));
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
     * 文件大小限制
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
     * array of photos thumbnails to indicator status, include property `url`, `status`, `error`
     *
     */
    files: PropTypes.array,
    /**
     * languages object, with property `maxError`
     *
     */
    lang: PropTypes.object
};
Uploader.defaultProps = {
    maxCount: 4,
    maxsize: 5,
    maxWidth: 500,
    files: [],
    onChange: undefined,
    onError: undefined,
    onOversize: undefined,
    lang: { maxError: maxCount => `最多只能上传${maxCount}张图片` }
};
;
