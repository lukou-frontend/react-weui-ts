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
import ReactDOM from 'react-dom';
import Icon from '../icon';
import classNames from '../../utils/classnames';
import deprecationWarning from '../../utils/deprecationWarning';

var Uploader = /*#__PURE__*/function (_React$Component) {
  _inherits(Uploader, _React$Component);

  var _super = _createSuper(Uploader);

  function Uploader(props) {
    var _this;

    _classCallCheck(this, Uploader);

    _this = _super.call(this, props);
    _this.state = {
      videoSrc: ''
    };
    return _this;
  }
  /**
   * Detecting vertical squash in loaded image.
   * Fixes a bug which squash image vertically while drawing into canvas for some images.
   * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
   * With react fix by n7best
   */


  _createClass(Uploader, [{
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
        console.log('Cannot check verticalSquash: CORS?');
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
        }

        py = ey + sy >> 1;
      }

      var ratio = py / ih;
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
      } else {
        if (window.FileReader) reader = new window.FileReader();
      }

      reader.onload = function (e) {
        var img;

        if (typeof img !== 'undefined') {
          img = new Image();
        } else {
          if (window.Image) img = new window.Image();
        }

        img.onload = function () {
          if (/image/g.test(file.type)) {
            var w = Math.min(_this2.props.maxWidth, img.width);
            var h = img.height * (w / img.width);
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d'); //check canvas support, for test

            if (ctx) {
              //patch subsampling bug
              //http://jsfiddle.net/gWY2a/24/
              var drawImage = ctx.drawImage;

              var newDrawImage = function newDrawImage(_img, sx, sy, sw, sh, dx, dy, dw, dh) {
                var vertSquashRatio = 1; // Detect if img param is indeed image

                if (!!_img && _img.nodeName === 'IMG') {
                  vertSquashRatio = _this2.detectVerticalSquash(_img);
                  if (typeof sw === 'undefined') sw = _img.naturalWidth;
                  if (typeof sh === 'undefined') sh = _img.naturalHeight;
                } // Execute several cases (Firefox does not handle undefined as no param)
                // by call (apply is bad performance)


                if (_arguments.length === 9) drawImage.call(ctx, _img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);else if (typeof sw !== 'undefined') drawImage.call(ctx, _img, sx, sy, sw, sh / vertSquashRatio);else drawImage.call(ctx, _img, sx, sy);
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

            img.src = e.target.result;
            reader.readAsDataURL(file);
          } // 视频上传
          else if (/video/g.test(file.type)) {
              _this2.setState({
                videoSrc: e.target.result
              });
            }
        };
      };
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _this3 = this;

      var langs = this.props.lang;
      var _files = e.target.files;
      if (!_files || _files.length === 0) return;

      if (this.props.files.length >= this.props.maxCount) {
        this.props.onError(langs.maxError(this.props.maxCount));
        return;
      }

      for (var key in _files) {
        if (!_files.hasOwnProperty(key)) continue;
        var file = _files[key];

        if (file.size / (1024 * 1024) > this.props.maxsize) {
          this.props.onOversize(file.size);
          return;
        }

        this.handleFile(file, function (_file, _e) {
          if (_this3.props.onChange) _this3.props.onChange(_file, _e);
          ReactDOM.findDOMNode(_this3.refs.uploader);
        });
      }
    }
  }, {
    key: "renderFiles",
    value: function renderFiles() {
      var _this4 = this;

      return this.props.files.map(function (file, idx) {
        var url = file.url,
            error = file.error,
            status = file.status,
            onClick = file.onClick,
            type = file.type,
            others = __rest(file, ["url", "error", "status", "onClick", "type"]);

        var cls = classNames({
          'weui-uploader__file': true,
          'weui-uploader__file_status': error || status
        });

        if (/image/g.test(file.type)) {
          var fileStyle = {
            backgroundImage: "url(".concat(url, ")")
          };

          if (onClick) {
            deprecationWarning('File onClick', 'Uploader onFileClick', null);
          }

          var handleFileClick = onClick ? onClick : function (e) {
            if (_this4.props.onFileClick) _this4.props.onFileClick(e, file, idx);
          };
          return /*#__PURE__*/React.createElement("li", _extends({
            className: cls,
            key: idx,
            style: fileStyle,
            onClick: handleFileClick
          }, others), error || status ? /*#__PURE__*/React.createElement("div", {
            className: "weui-uploader__file-content"
          }, error ? /*#__PURE__*/React.createElement(Icon, {
            value: "warn"
          }) : status) : false);
        } else if (/video/g.test(file.type)) {
          return /*#__PURE__*/React.createElement("video", {
            src: _this4.state.videoSrc,
            className: cls
          }, error || status ? /*#__PURE__*/React.createElement("div", {
            className: "weui-uploader__file-content"
          }, error ? /*#__PURE__*/React.createElement(Icon, {
            value: "warn"
          }) : status) : false);
        }
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
          accepted = _a.accepted,
          others = __rest(_a, ["className", "maxCount", "files", "onChange", "onFileClick", "lang", "maxsize", "onOversize", "accepted"]);

      var inputProps = _extends({}, others);

      delete inputProps.onError;
      delete inputProps.maxWidth;
      var cls = classNames(_defineProperty({
        'weui-uploader': true
      }, className, className));
      return /*#__PURE__*/React.createElement("div", {
        className: cls
      }, /*#__PURE__*/React.createElement("div", {
        className: "weui-uploader__hd"
      }, /*#__PURE__*/React.createElement("div", {
        className: "weui-uploader__info"
      }, files.length, "/", maxCount)), /*#__PURE__*/React.createElement("div", {
        className: "weui-uploader__bd"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "weui-uploader__files"
      }, this.renderFiles()), /*#__PURE__*/React.createElement("div", {
        className: "weui-uploader__input-box"
      }, /*#__PURE__*/React.createElement("input", _extends({
        ref: "uploader" //let react to reset after onchange
        ,
        className: "weui-uploader__input",
        type: "file",
        accept: accepted,
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
  lang: PropTypes.object,

  /**
   * 接收文件类型
   *
   */
  accepted: PropTypes.string
};
Uploader.defaultProps = {
  maxCount: 4,
  maxsize: 5,
  maxWidth: 500,
  files: [],
  onChange: undefined,
  onError: undefined,
  onOversize: undefined,
  lang: {
    maxError: function maxError(maxCount) {
      return "\u6700\u591A\u53EA\u80FD\u4E0A\u4F20".concat(maxCount, "\u5F20\u56FE\u7247");
    }
  },
  accepted: 'image/*'
};
;