import * as React from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Icon from '../icon';
import classNames from '../../utils/classnames';
import deprecationWarning from '../../utils/deprecationWarning';

/**
 * weui style uploader
 *
 */
interface Lang {
  maxError: (value: number) => void
}
interface MyFile extends File {
  lastModifiedDate: any;
  error?: any,
  url?: string,
  status: any,
  onClick?: () => void
}
interface UploaderProps {
  files: Array<MyFile>,
  lang: Lang,
  maxCount: number,
  maxWidth: number,
  onChange?: (file: File, event?: any) => void
  onError: (error: any) => void,
  title?: string,
  className?: any,
  onFileClick?: (e?: any, file?: File, idx?: any) => void
}
export default class Uploader extends React.Component<UploaderProps> {
    static propTypes = {
        /**
         * title of uploader
         *
         */
        title: PropTypes.string,
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

    static defaultProps = {
        title: '图片上传' as UploaderProps['title'],
        maxCount: 4 as UploaderProps['maxCount'],
        maxWidth: 500 as UploaderProps['maxWidth'],
        files: [] as UploaderProps['files'],
        onChange: undefined as UploaderProps['onChange'],
        onError: undefined as unknown as UploaderProps['onError'],
        lang: { maxError: maxCount => `最多只能上传${maxCount}张图片` } as UploaderProps['lang']
    };

    /**
     * Detecting vertical squash in loaded image.
     * Fixes a bug which squash image vertically while drawing into canvas for some images.
     * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
     * With react fix by n7best
     */
    detectVerticalSquash(img: any) {
        let data;
        let ih = img.naturalHeight;
        let canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = ih;
        let ctx = canvas.getContext('2d');
        if (!ctx) return
        ctx.drawImage(img, 0, 0);
        try {
            // Prevent cross origin error
            data = ctx.getImageData(0, 0, 1, ih).data;
        } catch (err) {
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
            } else {
                sy = py;
            }
            py = (ey + sy) >> 1;
        }
        let ratio = (py / ih);
        return (ratio === 0) ? 1 : ratio;
    }


    handleFile(file: Blob, cb: { (_file: any, _e: any): void; (arg0: { nativeFile: any; lastModified: any; lastModifiedDate: any; name: any; size: any; type: any; data: string; }, arg1: ProgressEvent<FileReader>): void; }) {
        let reader: any;
        if (typeof FileReader !== 'undefined') {
           reader = new FileReader();
        } else {
           if (window.FileReader) reader = new window.FileReader();
        }

        reader.onload = (e: any) => {
            let img: any;
            if (typeof Image !== 'undefined') {
               img = new Image();
            } else {
               if (window.Image) img = new window.Image();
            }
            img.onload = ()=>{
                let w = Math.min(this.props.maxWidth, img.width);
                let h = img.height * (w / img.width);
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');

                //check canvas support, for test
                if (ctx){
                    //patch subsampling bug
                    //http://jsfiddle.net/gWY2a/24/
                    let drawImage = ctx.drawImage;
                    ctx.drawImage = (_img: any, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number) =>
                    {
                        let vertSquashRatio = 1;
                        // Detect if img param is indeed image
                        if (!!_img && _img.nodeName === 'IMG')
                        {
                            vertSquashRatio = this.detectVerticalSquash(_img);
                            if (typeof sw === 'undefined') (sw = _img.naturalWidth);
                            if (typeof sh === 'undefined') (sh = _img.naturalHeight);
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
                    ctx.drawImage(img, 0, 0, w, h);

                    let base64 = canvas.toDataURL('image/png');

                    cb({
                        nativeFile: file,
                        lastModified: (file as MyFile).lastModified,
                        lastModifiedDate: (file as MyFile).lastModifiedDate,
                        name: (file as MyFile).name,
                        size: file.size,
                        type: file.type,
                        data: base64
                    }, e);
                } else {
                    cb(file, e);
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    handleChange(e: { target: { files: any; }; }) {
        const langs = this.props.lang;
        let _files = e.target.files;

        if (_files.length === 0) return;

        if (this.props.files.length >= this.props.maxCount) {
            this.props.onError(langs.maxError(this.props.maxCount));
            return;
        }

        for (let key in _files) {
            if (!_files.hasOwnProperty(key)) continue;
            let file = _files[key];

            this.handleFile(file, (_file: File, _e: any)=>{
                if (this.props.onChange) this.props.onChange(_file, _e);
                ReactDOM.findDOMNode(this.refs.uploader).value = '';
            }, e);
        }
    }

    renderFiles(){
        return this.props.files.map((file, idx)=>{
            let {url, error, status, onClick, ...others} = file;
            let fileStyle = {
                backgroundImage: `url(${url})`
            };
            let cls = classNames({
                'weui-uploader__file': true,
                'weui-uploader__file_status': error || status
            });

            if (onClick){
                deprecationWarning('File onClick', 'Uploader onFileClick', null);
            }

            let handleFileClick = onClick ? onClick : (e: any) => {
                if (this.props.onFileClick) this.props.onFileClick(e, file, idx);
            };

            return (
                <li className={cls} key={idx} style={fileStyle} onClick={handleFileClick} {...others}>
                    {
                        error || status ?
                        <div className="weui-uploader__file-content">
                            { error ? <Icon value="warn" /> : status }
                        </div>
                        : false
                    }
                </li>
            );
        });
    }

    render(){
        const { className, title, maxCount, files, onChange, onFileClick, ...others } = this.props;
        const inputProps = Object.assign({}, others);
        delete inputProps.lang;
        delete inputProps.onError;
        delete inputProps.maxWidth;

        const cls = classNames({
            'weui-uploader': true,
            [className]: className
        });

        return (
            <div className={cls}>
                <div className="weui-uploader__hd">
                    <p className="weui-uploader__title">{title}</p>
                    <div className="weui-uploader__info">{files.length}/{maxCount}</div>
                </div>
                <div className="weui-uploader__bd">
                    <ul className="weui-uploader__files">
                        {this.renderFiles()}
                    </ul>
                    <div className="weui-uploader__input-box">
                        <input
                        ref="uploader"//let react to reset after onchange
                        className="weui-uploader__input"
                        type="file"
                        accept="image/*"
                        capture="camera"
                        onChange={this.handleChange.bind(this)}
                        {...inputProps}
                        />
                    </div>
                </div>
            </div>
        );
    }
};
