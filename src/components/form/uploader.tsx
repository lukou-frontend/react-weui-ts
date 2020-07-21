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
  lastModifiedDate: Date;
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
  className?: any,
  onFileClick?: (e?: any, file?: File, idx?: any) => void,
  maxsize: number,
  onOversize: (val: number) => void,
  type: 'image' | 'vedio',
  onDelete: (file: File, id: number) => void
}
interface UploaderStates {
  videoLength: number,
}
type customFile = {
  nativeFile: Blob,
  lastModified: number,
  lastModifiedDate: Date,
  data: string
  name: string,
  size: number,
  type: string
}
type handleFileCallback = (file: customFile | Blob, e: renderOnloadEvent) => void
type renderOnloadEvent = {
  target: { result: any }
}
export default class Uploader extends React.Component<UploaderProps, UploaderStates> {
  constructor(props: UploaderProps) {
    super(props)
    this.state = {
      videoLength: document.querySelectorAll('ul li img').length
    }
  }
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
  };

  static defaultProps = {
    maxCount: 4 as UploaderProps['maxCount'],
    maxsize: 5 as UploaderProps['maxsize'],
    maxWidth: 500 as UploaderProps['maxWidth'],
    files: [] as UploaderProps['files'],
    onChange: undefined as UploaderProps['onChange'],
    onError: undefined as unknown as UploaderProps['onError'],
    onOversize: undefined as any as UploaderProps['onOversize'],
    onDelete: undefined as any as UploaderProps['onDelete'],
    lang: { maxError: maxCount => `最多只能上传${maxCount}张图片` } as UploaderProps['lang'],
    type: 'image',
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


  handleFile(file: Blob, cb: handleFileCallback) {
    let reader: any;
    if (typeof FileReader !== 'undefined') {
      reader = new FileReader();
    } else {
      if (window.FileReader) reader = new window.FileReader();
    }

    reader.onload = (e: renderOnloadEvent) => {
      if (/image/g.test(file.type)) {
        let img: any;
        if (typeof img !== 'undefined') {
          img = new Image();
        } else {
          if (window.Image) img = new window.Image();
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
            const newDrawImage = (_img: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx?: number, dy?: number, dw?: number, dh?: number) => {
              let vertSquashRatio = 1;
              // Detect if img param is indeed image
              if (!!_img && (_img as HTMLImageElement).nodeName === 'IMG') {
                vertSquashRatio = this.detectVerticalSquash(_img) as number;
                if (typeof sw === 'undefined') (sw = (_img as HTMLImageElement).naturalWidth);
                if (typeof sh === 'undefined') (sh = (_img as HTMLImageElement).naturalHeight);
              }

              // Execute several cases (Firefox does not handle undefined as no param)
              // by call (apply is bad performance)
              if (arguments.length === 9)
                drawImage.call(ctx, _img, sx, sy, sw, sh, dx, dy, dw, dh! / vertSquashRatio);
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
      } else if (/video/g.test(file.type)) {
        let video = document.createElement('video')
        video.src = e.target.result;
        video.width = 600
        video.height = 600
        video.controls = true
        video.muted = true
        video.autoplay = true
        video.preload = 'preload'
        video.addEventListener('loadeddata', function () {
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext('2d');
          if (ctx) {
            canvas.width = this.videoWidth
            canvas.height = this.videoHeight
            ctx.drawImage(this, 0, 0, 600, 600);
            let base64 = e.target.result;
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
        })
      }
    };
    reader.readAsDataURL(file);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const langs = this.props.lang;
    let _files = e.target.files;

    if (!_files || _files.length === 0) return;

    if (this.props.files.length + this.state.videoLength >= this.props.maxCount) {
      this.props.onError(langs.maxError(this.props.maxCount));
      return;
    }

    for (let key in _files) {
      if (!_files.hasOwnProperty(key)) continue;
      let file = _files[key];
      if (file.size / (1024 * 1024) > this.props.maxsize) {
        this.props.onOversize(file.size)
        return
      }
      this.handleFile(file, (_file: File, _e: renderOnloadEvent) => {
        if (this.props.onChange) this.props.onChange(_file, _e);
        (ReactDOM.findDOMNode(this.refs.uploader) as HTMLInputElement)
      })
    }
  }

  renderFiles() {
    return this.props.files.map((file, idx) => {
      console.log(file)
      let { url, error, status, onClick, ...others } = file;
      let fileStyle: React.CSSProperties = {
        backgroundImage: `url(${url})`,
        position: 'relative'
      };
      let videofileStyle: React.CSSProperties = {
        backgroundImage: `url(${url})`,
        position: 'relative',
        opacity: '50%'
      };
      let iconStyle: React.CSSProperties = {
        position: 'absolute',
        right: '-1px',
        top: 0
      }
      let btnStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
      let cls = classNames({
        'weui-uploader__file': true,
        'weui-uploader__file_status': error || status
      });

      if (onClick) {
        deprecationWarning('File onClick', 'Uploader onFileClick', null);
      }

      let handleFileClick = onClick ? onClick : (e: any) => {
        if (this.props.onFileClick) this.props.onFileClick(e, file, idx);
      };
      let handleClick = (e: Event) => {
        e.stopPropagation()
        if (this.props.onDelete) this.props.onDelete(file, idx);
      };
      if(this.props.type==='image') {
        return (
        <li className={cls} key={idx} style={fileStyle} onClick={handleFileClick} {...others}>
          <Icon value="clear" style={iconStyle} onClick={handleClick} />
          {
            error || status ?
              <div className="weui-uploader__file-content">
                {error ? <Icon value="warn" /> : status}
              </div>
              : false
          }
        </li>
      );
      } else {
        return (
          <li className={cls} key={idx} style={videofileStyle} onClick={handleFileClick} {...others}>
            <Icon value="clear" style={iconStyle} onClick={handleClick} />
            <img src="./play.png" style={btnStyle} />
            {
              error || status ?
                <div className="weui-uploader__file-content">
                  {error ? <Icon value="warn" /> : status}
                </div>
                : false
            }
          </li>
        );
      }
      
    }
    );
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

    return (
      <div className={cls}>
        <div className="weui-uploader__hd">
          <div className="weui-uploader__info">{files.length + this.state.videoLength}/{maxCount}</div>
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
              accept={type === 'image' ? 'image/*' : 'video/*'}
              onChange={this.handleChange.bind(this)}
              {...inputProps}
            />
          </div>
        </div>
      </div>
    );
  }
};
