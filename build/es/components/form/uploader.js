import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import classNames from '../../utils/classnames';
import deprecationWarning from '../../utils/deprecationWarning';

var Uploader = /*#__PURE__*/function (_React$Component) {
  _inherits(Uploader, _React$Component);

  var _super = _createSuper(Uploader);

  function Uploader() {
    var _this;

    _classCallCheck(this, Uploader);

    _this = _super.apply(this, arguments);
    _this.uploaderRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Uploader, [{
    key: "getImageSize",
    value: function getImageSize() {
      var size;

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

  }, {
    key: "detectVerticalSquash",
    value: function detectVerticalSquash(img) {
      var data;
      var ih = img.naturalHeight;
      var canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = ih;
      var ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      try {
        // Prevent cross origin error
        data = ctx.getImageData(0, 0, 1, ih).data;
      } catch (err) {
        // hopeless, assume the image is well and good.
        console.log('Cannot check verticalSquash: CORS?'); // eslint-disable-next-line consistent-return

        return 1;
      } // search image edge pixel position in case it is squashed vertically.


      var sy = 0;
      var ey = ih;
      var py = ih;

      while (py > sy) {
        var alpha = data[(py - 1) * 4 + 3];

        if (alpha === 0) {
          ey = py;
        } else {
          sy = py;
        } // eslint-disable-next-line no-bitwise


        py = ey + sy >> 1;
      }

      var ratio = py / ih; // eslint-disable-next-line consistent-return

      return ratio === 0 ? 1 : ratio;
    }
  }, {
    key: "handleFile",
    value: function handleFile(file, cb) {
      var _arguments = arguments,
          _this2 = this;

      var reader;

      if (typeof FileReader !== 'undefined') {
        reader = new FileReader();
      } else if (window.FileReader) {
        reader = new window.FileReader();
      }

      reader.onload = function (e) {
        if (/image/g.test(file.type)) {
          var img;

          if (typeof img !== 'undefined') {
            img = new Image();
          } else if (window.Image) {
            img = new window.Image();
          }

          img.onload = function () {
            var w = Math.min(_this2.props.maxWidth, img.width);
            var h = img.height * (w / img.width);
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            if (ctx) {
              var drawImage = ctx.drawImage;

              var newDrawImage = function newDrawImage(_img, sx, sy, sw, sh, dx, dy, dw, dh) {
                var vertSquashRatio = 1;
                var newSw = sw;
                var newSh = sh;

                if (!!_img && _img.nodeName === 'IMG') {
                  vertSquashRatio = _this2.detectVerticalSquash(_img);
                  if (typeof newSw === 'undefined') newSw = _img.naturalWidth;
                  if (typeof newSh === 'undefined') newSh = _img.naturalHeight;
                }

                if (_arguments.length === 9) drawImage.call(ctx, _img, sx, sy, newSw, newSh, dx, dy, dw, dh / vertSquashRatio);else if (typeof newSw !== 'undefined') drawImage.call(ctx, _img, sx, sy, newSw, newSh / vertSquashRatio);else drawImage.call(ctx, _img, sx, sy);
              };

              canvas.width = w;
              canvas.height = h;
              newDrawImage(img, 0, 0, w, h);
              var base64 = canvas.toDataURL('image/png');
              cb({
                nativeFile: file,
                lastModified: file.lastModified,
                lastModifiedDate: file.lastModifiedDate,
                name: file.name,
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
          var video = document.createElement('video');
          video.src = e.target.result;
          video.width = _this2.getImageSize();
          video.height = _this2.getImageSize();
          video.controls = true;
          video.muted = true;
          video.autoplay = true;
          video.preload = 'preload';

          _this2.props.currentVideo(e.target.result);

          video.addEventListener('loadeddata', function () {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');

            if (ctx) {
              canvas.width = this.videoWidth;
              canvas.height = this.videoHeight;
              ctx.drawImage(this, 0, 0, 600, 600);
              var base64 = canvas.toDataURL('image/png');
              cb({
                nativeFile: file,
                lastModified: file.lastModified,
                lastModifiedDate: file.lastModifiedDate,
                name: file.name,
                size: file.size,
                type: file.type,
                data: base64
              }, e);
            } else {
              cb(file, e);
            }
          });
        }
      };

      reader.readAsDataURL(file);
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _this3 = this;

      var langs = this.props.lang;
      var files = e.target.files;
      if (!files || files.length === 0) return;

      if (this.props.files.length >= this.props.maxCount) {
        this.props.onError(langs.maxError(this.props.maxCount));
        return;
      } // eslint-disable-next-line no-restricted-syntax


      for (var key in files) {
        if (files.hasOwnProperty(key)) {
          var file = files[key];

          if (file.size / (1024 * 1024) > this.props.maxsize) {
            this.props.onOversize(file.size);
            return;
          }

          this.handleFile(file, function (_file, _e) {
            if (_this3.props.onChange) _this3.props.onChange(_file, _e);
            _this3.uploaderRef.current.value = '';
          });
        }
      }
    }
  }, {
    key: "renderFiles",
    value: function renderFiles() {
      var _this4 = this;

      return this.props.files.map(function (file, idx) {
        var imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAEVElEQVRoQ82Za8ilUxTHf3/3SxhyyS2XSUjJdT64ROMyyDBTIuMyDJFBQmRcx62GEMOUomimMbl8mDEJzQef5DJ8INdkNEoSCkUpLP2nfd6eOec55+xnP+e9rE9v77v2Wr+93rXXXns9oqVExEHATOBo4FBgf2AnYDvgT+AP4Dvga+BD4B1JP7d0i0oMRMS+wHzgMuCwhjYCeA9YDqyS5I01lkbgEXEgcBdwObBNY2+9C34DngaekOSfsyULPCIMeTtwJ7B9tvV8xZ+A2yStyF0yFDwiDgZeBo7LNdpC7zXgakm/D7MxEDwiTgFWA9OGGRrh378BZknyge4rfcEjYjbwSqoOI+TKMvUjcIakz/tp14KnSL81SdAd1h+AEyVtrIPvAU85/fEEp0e/wDriMyT91a2wGXiqHu9O0EHMyhngRUlXDgO/G3gw1+IE6p0j6c2qv7GIp8vli8I6/R+wxThu5FvgCEl/d3xUwZ9zDS1w/j5wGuDS+ThweIGNnCXXSXp2M/DUe2wovMaXSrrJBiNiK+AG4L5xONyu64dI+te+NkU8InyVP5yz7RqdMfDO3yJij2RvAbBlod26ZWdJersK/mVBl9cx3ANe2cAxwFLX4xHBr5R06Sbw1E87TUqlL3hlA/OARwG3w23kF2BPSWHwq4DnW1gbCp7SccfUXd7S8kY+StInBn8GuH68wSvRn56qz/mFPhdIesHg64DTC414WVbEu+1HxCzgyYKz9YikOwz+VXorlrIXgaf02Rq4MZXPnTMBXpJ0icHdhe2TuahOrRi8kj6OvrvRHFkr6TyD/wrslrOij84owH1p+e2ZI+sknWnw79NIIWfRSCOeWmi3CXMaOF8taa7BP3MD02Bht2rjiEeES+Mi4NaC0rhc0nyDrwXOnSjwiLg4XUb7Ffq8X9Jigz+Wdl5oJ68cRoQnXb7+Typ1lNbNk7TK4Bem8UOpvYGpEhG7Aw+llnkUDdd0SRsM7k7OA5mhM5YmVSW1uAuBxcCupVHpWrdRkqdpY22t35knFBqva2v9sHiq5aEfWME6/fi1wNjrouEGlklyHXZf78mty9vchjZy1Y+X9FE14r5uPb8omVh53TXAqcDNBeUtF3q9pBkd5eqb8wHgnlwrk6A3R9KaOnBH2w3XXpMANcylz+DJfkD0gKcc9aDeA/epJP8Ax0r6tApVN4J7FbhgCpEvkrSkm6cOfBdgvUcBUwD+DWB2NUVqU6Xzy1TWnFd7TyK8P3TNlOQPYD0yaD7ujtEzjLYv85K9G9rzQr8VamXYF4kDAP+72rS9TcHt76J+kR6YKlVPEbEDsAy4oilBQ31Xj3uBJXU5PfRw9nMWEWen55XHC6MWn6eF3SVvkJNGHWFEbAt4yO5Ph+5L2oqrl2eWr+dEeWAdzyGJCPfVnsX4wvIL3T13rri38dW9otMw5S5sDd51BvxfOxLwgHPYt/wP/AgoAS3O8VE4G6WN/wH0qmQ+I0w9UgAAAABJRU5ErkJggg==';
        var closeSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAB70lEQVRYR82XMUsDMRTH/7mjBSd1FIRqwamgm+KooB3OviLd/SAOioJ+EPciTb2hCnYU3RQ6CdWC4KhOQss1ErnKeb3kUk4wna7k5f1/eXl5eWGw5Mcs4cBEIM1mc1UI4QFYB7AEYDZcyBuARwA3jDG/UqncTbpAI5BGo+E5jnMihFgxFHgQQuxXq1Xf0F4fkXq9Pp/L5c4AbJg6jNm1B4PBXq1We0mbr4yI7/trw+HwXAgxl+ZEN84Ye3UcZ9fzvFutXdKghAiCoA1gKgtEZO6n67obOpixiMjtyOfzd1kjEV+AjEy/319VbdMYCOf8OkNOpAWwTUSbSUa/QOTpYIxdJBm6rosgCNKEvsd1tkKInaTT9AuEc34PYDmuJh2Xy2X0ej10Oh0tTKlUQqFQQKvVUoE/ENFYGfgBCYuVMrOlQLFYRLfbVcKY2MhVMMbW4kXvB4RzfgTgQLdcnZApROj/mIgOo1pRkEsAW2lJkCQ4IYSUuCKibRXIE4CFNBA5HhWW/9O2LMHnMxEtqkDeAUybgERh5LcubxT+PohoxnoQa7bGmmS14/haU9BkBltR4iWINZdeGJX/bwMkiDWNkYSxolUclV0rmucRjBXPieiFFJ6m06TuTXGp/e0DKy7y709O09Ygi53R2zeLgOncL0HKZTDFM68/AAAAAElFTkSuQmCC';

        var url = file.url,
            error = file.error,
            status = file.status,
            onClick = file.onClick,
            others = __rest(file, ["url", "error", "status", "onClick"]);

        var wrapStyle = {
          position: 'relative',
          marginRight: 12,
          marginBottom: 9,
          "float": 'left',
          width: _this4.getImageSize(),
          height: _this4.getImageSize()
        };
        var fileStyle = {
          backgroundImage: "url(".concat(url, ")"),
          position: 'relative',
          width: _this4.getImageSize(),
          height: _this4.getImageSize()
        };
        var videofileStyle = {
          backgroundImage: "url(".concat(url, ")"),
          filter: 'contrast(0.4)',
          width: _this4.getImageSize(),
          height: _this4.getImageSize()
        };
        var iconStyle = {
          position: 'absolute',
          right: '-9px',
          top: '-9px',
          width: '16px',
          height: '16px'
        };
        var btnStyle = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '22px',
          height: '22px'
        };
        var cls = classNames({
          'weui-uploader__file': true,
          'weui-uploader__file_status': error || status
        });

        if (onClick) {
          deprecationWarning('File onClick', 'Uploader onFileClick', null);
        }

        var handleFileClick = onClick || function (e) {
          if (_this4.props.onFileClick) _this4.props.onFileClick(e, file, idx);
        };

        var handleClick = function handleClick(e) {
          e.stopPropagation();
          if (_this4.props.onDelete) _this4.props.onDelete(file, idx);
        };

        if (_this4.props.type === 'image') {
          return /*#__PURE__*/React.createElement("div", {
            style: wrapStyle,
            key: idx
          }, /*#__PURE__*/React.createElement("li", _extends({
            className: cls,
            key: idx,
            style: fileStyle,
            onClick: handleFileClick
          }, others), error || status ? /*#__PURE__*/React.createElement("div", {
            className: "weui-uploader__file-content"
          }, error ? /*#__PURE__*/React.createElement(Icon, {
            value: "warn"
          }) : status) : false), /*#__PURE__*/React.createElement("img", {
            src: closeSrc,
            style: iconStyle,
            onClick: handleClick,
            alt: ""
          }));
        }

        return /*#__PURE__*/React.createElement("div", {
          style: wrapStyle,
          key: idx
        }, /*#__PURE__*/React.createElement("li", _extends({
          className: cls,
          key: idx,
          style: videofileStyle,
          onClick: handleFileClick
        }, others), error || status ? /*#__PURE__*/React.createElement("div", {
          className: "weui-uploader__file-content"
        }, error ? /*#__PURE__*/React.createElement(Icon, {
          value: "warn"
        }) : status) : false), /*#__PURE__*/React.createElement("img", {
          src: closeSrc,
          style: iconStyle,
          onClick: handleClick,
          alt: ""
        }), /*#__PURE__*/React.createElement("img", {
          src: imgSrc,
          style: btnStyle,
          alt: ""
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          maxCount = _a.maxCount,
          files = _a.files,
          onChange = _a.onChange,
          onFileClick = _a.onFileClick,
          lang = _a.lang,
          maxsize = _a.maxsize,
          onOversize = _a.onOversize,
          type = _a.type,
          onDelete = _a.onDelete,
          currentVideo = _a.currentVideo,
          showTitle = _a.showTitle,
          size = _a.size,
          showAddInput = _a.showAddInput,
          others = __rest(_a, ["className", "maxCount", "files", "onChange", "onFileClick", "lang", "maxsize", "onOversize", "type", "onDelete", "currentVideo", "showTitle", "size", "showAddInput"]);

      var inputProps = _extends({}, others);

      delete inputProps.onError;
      delete inputProps.maxWidth;
      var cls = classNames(_defineProperty({
        'weui-uploader': true
      }, className, className));
      return /*#__PURE__*/React.createElement("div", {
        className: cls
      }, showTitle ? /*#__PURE__*/React.createElement("div", {
        className: "weui-uploader__hd"
      }, /*#__PURE__*/React.createElement("div", {
        className: "weui-uploader__info"
      }, files.length, "/", maxCount)) : null, /*#__PURE__*/React.createElement("div", {
        className: "weui-uploader__bd",
        style: {
          overflow: 'visible'
        }
      }, /*#__PURE__*/React.createElement("ul", {
        className: "weui-uploader__files"
      }, this.renderFiles()), /*#__PURE__*/React.createElement("div", {
        style: {
          width: this.getImageSize() - 2,
          height: this.getImageSize() - 2,
          display: showAddInput === true ? 'block' : 'none'
        },
        className: "weui-uploader__input-box"
      }, /*#__PURE__*/React.createElement("input", _extends({
        ref: this.uploaderRef //let react to reset after onchange
        ,
        className: "weui-uploader__input",
        type: "file",
        accept: type === 'image' ? 'image/*' : 'video/*',
        onChange: this.handleChange.bind(this)
      }, inputProps)))));
    }
  }]);

  return Uploader;
}(React.Component);

export { Uploader as default };
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
  showAddInput: PropTypes.bool
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
  lang: {
    maxError: function maxError(maxCount) {
      return "\u6700\u591A\u53EA\u80FD\u4E0A\u4F20".concat(maxCount, "\u5F20\u56FE\u7247");
    }
  },
  type: 'image',
  currentVideo: undefined,
  showTitle: false,
  size: 'normal'
};