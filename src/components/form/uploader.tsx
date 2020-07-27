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
  onClick?: () => void,
  video: string
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
  onDelete: (file: File, id: number) => void,
  currentVideo: (val: string) => void,
  showTitle: boolean
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
export default class Uploader extends React.Component<UploaderProps> {
  constructor(props: UploaderProps) {
    super(props)
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
    /**
     * 参数为当前视频src
     *
     */
    currentVideo: PropTypes.func,
    /**
     * 是否展示标题
     *
     */
    showTitle: PropTypes.bool
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
    type: 'image' as UploaderProps['type'],
    currentVideo: undefined as unknown as UploaderProps['currentVideo'],
    showTitle: false as UploaderProps['showTitle']
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
          if (ctx) {
            let drawImage = ctx.drawImage;
            const newDrawImage = (_img: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx?: number, dy?: number, dw?: number, dh?: number) => {
              let vertSquashRatio = 1;
              if (!!_img && (_img as HTMLImageElement).nodeName === 'IMG') {
                vertSquashRatio = this.detectVerticalSquash(_img) as number;
                if (typeof sw === 'undefined') (sw = (_img as HTMLImageElement).naturalWidth);
                if (typeof sh === 'undefined') (sh = (_img as HTMLImageElement).naturalHeight);
              }
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
        video.width = 79
        video.height = 79
        video.controls = true
        video.muted = true
        video.autoplay = true
        video.preload = 'preload'
        this.props.currentVideo(e.target.result)
        video.addEventListener('loadeddata', function () {
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext('2d');
          if (ctx) {
            canvas.width = this.videoWidth
            canvas.height = this.videoHeight
            ctx.drawImage(this, 0, 0, 600, 600);
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
        })
      }
    };
    reader.readAsDataURL(file);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const langs = this.props.lang;
    let _files = e.target.files;

    if (!_files || _files.length === 0) return;

    if (this.props.files.length >= this.props.maxCount) {
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
      console.log(file)
      this.handleFile(file, (_file: File, _e: renderOnloadEvent) => {
        if (this.props.onChange) this.props.onChange(_file, _e);
        (ReactDOM.findDOMNode(this.refs.uploader) as HTMLInputElement)
      })
    }
  }

  renderFiles() {
    return this.props.files.map((file, idx) => {
      console.log(file)
      let imgSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAEVElEQVRoQ82Za8ilUxTHf3/3SxhyyS2XSUjJdT64ROMyyDBTIuMyDJFBQmRcx62GEMOUomimMbl8mDEJzQef5DJ8INdkNEoSCkUpLP2nfd6eOec55+xnP+e9rE9v77v2Wr+93rXXXns9oqVExEHATOBo4FBgf2AnYDvgT+AP4Dvga+BD4B1JP7d0i0oMRMS+wHzgMuCwhjYCeA9YDqyS5I01lkbgEXEgcBdwObBNY2+9C34DngaekOSfsyULPCIMeTtwJ7B9tvV8xZ+A2yStyF0yFDwiDgZeBo7LNdpC7zXgakm/D7MxEDwiTgFWA9OGGRrh378BZknyge4rfcEjYjbwSqoOI+TKMvUjcIakz/tp14KnSL81SdAd1h+AEyVtrIPvAU85/fEEp0e/wDriMyT91a2wGXiqHu9O0EHMyhngRUlXDgO/G3gw1+IE6p0j6c2qv7GIp8vli8I6/R+wxThu5FvgCEl/d3xUwZ9zDS1w/j5wGuDS+ThweIGNnCXXSXp2M/DUe2wovMaXSrrJBiNiK+AG4L5xONyu64dI+te+NkU8InyVP5yz7RqdMfDO3yJij2RvAbBlod26ZWdJersK/mVBl9cx3ANe2cAxwFLX4xHBr5R06Sbw1E87TUqlL3hlA/OARwG3w23kF2BPSWHwq4DnW1gbCp7SccfUXd7S8kY+StInBn8GuH68wSvRn56qz/mFPhdIesHg64DTC414WVbEu+1HxCzgyYKz9YikOwz+VXorlrIXgaf02Rq4MZXPnTMBXpJ0icHdhe2TuahOrRi8kj6OvrvRHFkr6TyD/wrslrOij84owH1p+e2ZI+sknWnw79NIIWfRSCOeWmi3CXMaOF8taa7BP3MD02Bht2rjiEeES+Mi4NaC0rhc0nyDrwXOnSjwiLg4XUb7Ffq8X9Jigz+Wdl5oJ68cRoQnXb7+Typ1lNbNk7TK4Bem8UOpvYGpEhG7Aw+llnkUDdd0SRsM7k7OA5mhM5YmVSW1uAuBxcCupVHpWrdRkqdpY22t35knFBqva2v9sHiq5aEfWME6/fi1wNjrouEGlklyHXZf78mty9vchjZy1Y+X9FE14r5uPb8omVh53TXAqcDNBeUtF3q9pBkd5eqb8wHgnlwrk6A3R9KaOnBH2w3XXpMANcylz+DJfkD0gKcc9aDeA/epJP8Ax0r6tApVN4J7FbhgCpEvkrSkm6cOfBdgvUcBUwD+DWB2NUVqU6Xzy1TWnFd7TyK8P3TNlOQPYD0yaD7ujtEzjLYv85K9G9rzQr8VamXYF4kDAP+72rS9TcHt76J+kR6YKlVPEbEDsAy4oilBQ31Xj3uBJXU5PfRw9nMWEWen55XHC6MWn6eF3SVvkJNGHWFEbAt4yO5Ph+5L2oqrl2eWr+dEeWAdzyGJCPfVnsX4wvIL3T13rri38dW9otMw5S5sDd51BvxfOxLwgHPYt/wP/AgoAS3O8VE4G6WN/wH0qmQ+I0w9UgAAAABJRU5ErkJggg==";
      let { url, error, status, onClick, ...others } = file;
      let wrapStyle: React.CSSProperties = {
        position: 'relative', marginRight: 9, marginBottom: 9, float: 'left', width: 79, height: 79
      }
      let fileStyle: React.CSSProperties = {
        backgroundImage: `url(${url})`,
        position: 'relative'
      };
      let videofileStyle: React.CSSProperties = {
        backgroundImage: `url(${url})`,
        filter: 'contrast(0.4)'
      };
      let iconStyle: React.CSSProperties = {
        position: 'absolute',
        right: '-1px',
        top: 0,
        color: '#fff'
      }
      let btnStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '22px',
        height: '22px'
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
      if (this.props.type === 'image') {
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
          <div style={wrapStyle} key={idx}>
            <li className={cls} key={idx} style={videofileStyle} onClick={handleFileClick} {...others}>
              {
                error || status ?
                  <div className="weui-uploader__file-content">
                    {error ? <Icon value="warn" /> : status}
                  </div>
                  : false
              }
            </li>
            <Icon value="clear" style={iconStyle} onClick={handleClick} />
            <img src={imgSrc} style={btnStyle} />
          </div>

        );
      }
    }
    );
  }

  render() {
    const { className, maxCount, files, onChange, onFileClick, lang, maxsize, onOversize, type, onDelete, currentVideo, showTitle, ...others } = this.props;
    const inputProps = Object.assign({}, others);
    delete inputProps.onError;
    delete inputProps.maxWidth;


    const cls = classNames({
      'weui-uploader': true,
      [className]: className
    });

    return (
      <div className={cls}>
        {
          showTitle ?
            <div className="weui-uploader__hd">
              <div className="weui-uploader__info">{files.length}/{maxCount}</div>
            </div> :
            null
        }
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
