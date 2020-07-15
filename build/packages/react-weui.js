(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.WeUI = global.WeUI || {}),global.React));
}(this, (function (exports,React) { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames

  with fix with es6 export default
*/
var hasOwn = {}.hasOwnProperty;
function classNames() {
    var classes = [];

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        if (!arg) continue;
        var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        } else if (Array.isArray(arg)) {
            classes.push(classNames.apply(null, arg));
        } else if (argType === 'object') {
            for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }
    return classes.join(' ');
}

var Button$1 = function (_React$Component) {
    inherits(Button, _React$Component);

    function Button() {
        classCallCheck(this, Button);
        return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    createClass(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                component = _props.component,
                type = _props.type,
                size = _props.size,
                plain = _props.plain,
                className = _props.className,
                children = _props.children,
                others = objectWithoutProperties(_props, ['component', 'type', 'size', 'plain', 'className', 'children']);

            var Component$$1 = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
            var cls = type === 'vcode' ? classNames('weui-vcode-btn', defineProperty({}, className, className)) : classNames(defineProperty({
                'weui-btn': true,
                'weui-btn_mini': size === 'small',
                'weui-btn_primary': type === 'primary' && !plain,
                'weui-btn_default': type === 'default' && !plain,
                'weui-btn_warn': type === 'warn',
                'weui-btn_plain-primary': type === 'primary' && plain,
                'weui-btn_plain-default': type === 'default' && plain,
                'weui-btn_disabled': this.props.disabled && !plain,
                'weui-btn_plain-disabled': this.props.disabled && plain
            }, className, className));
            return React.createElement(Component$$1, Object.assign({}, others, { className: cls }), children);
        }
    }]);
    return Button;
}(React.Component);

Button$1.defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal'
};

/**
 * Created by jf on 15/10/27.
 */
// import Button from './button';
// import ButtonArea from './button_area';
// import PreviewButton from './button_preview';
// export {
//     Button,
//     ButtonArea,
//     PreviewButton
// };

/**
 * Created by jf on 15/10/27.
 */
// import version from './version';
//0.4.x components
// import ActionSheet from './components/actionsheet/index';

// import {Button, ButtonArea, PreviewButton} from './components/button/index';
// import {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} from './components/cell/index';
// import Mask from './components/mask/index';
// import {Form, FormCell, TextArea, Input, Switch, Radio, Slider, Checkbox, Select, Uploader, VCode, Agreement, Preview, PreviewHeader, PreviewBody, PreviewFooter, PreviewItem} from './components/form/index';
// import Label from './components/label/index';
// import Toast from './components/toast/index';
// import Progress from './components/progress/index';
// import Dialog from './components/dialog/index';
// import Msg from './components/msg/index';
// import Article from './components/article/index';
// import Icon from './components/icon/index';
// import {Grids, Grid, GridIcon, GridLabel} from './components/grid/index';
// import {Panel, PanelHeader, PanelBody, PanelFooter} from './components/panel/index';
// import {MediaBox, MediaBoxHeader, MediaBoxBody, MediaBoxTitle, MediaBoxDescription, MediaBoxInfo, MediaBoxInfoMeta} from './components/mediabox/index';
// import {Tab, TabBody, TabBodyItem, NavBar, NavBarItem, TabBar, TabBarItem, TabBarIcon, TabBarLabel} from './components/tab/index';
// import SearchBar from './components/searchbar/index';
// //1.0.0 components
// import {Flex, FlexItem} from './components/flex/index';
// import Toptips from './components/toptips';
// import {Gallery, GalleryDelete} from './components/gallery';
// import {Footer, FooterText, FooterLinks, FooterLink} from './components/footer';
// import LoadMore from './components/loadmore';
// import { Picker, CityPicker, PickerGroup } from './components/picker';
// import Badge from './components/badge';
// //non standard
// import { Popup, PopupHeader } from './components/popup';
// import PullToRefresh from './components/ptr';
// import InfiniteLoader from './components/infiniteloader';
// import Swiper from './components/swiper';
// import Page from './components/page';
// export default {
// version,
//0.4.x
// ActionSheet,
// Button,
// ButtonArea,
// Cells,
// CellsTitle,
// CellsTips,
// Cell,
// CellHeader,
// CellBody,
// CellFooter,
// Mask,
// Form,
// FormCell,
// Radio,
// Checkbox,
// Input,
// TextArea,
// Switch,
// Select,
// Uploader,
// Label,
// Toast,
// Progress,
// Dialog,
// Msg,
// Article,
// Icon,
// Grids,
// Grid,
// GridIcon,
// GridLabel,
// Panel,
// PanelHeader,
// PanelBody,
// PanelFooter,
// MediaBox,
// MediaBoxHeader,
// MediaBoxBody,
// MediaBoxTitle,
// MediaBoxDescription,
// MediaBoxInfo,
// MediaBoxInfoMeta,
// NavBar,
// NavBarItem,
// Tab,
// TabBody,
// TabBodyItem,
// TabBar,
// TabBarIcon,
// TabBarItem,
// TabBarLabel,
// SearchBar,
// //1.0.0
// Flex,
// FlexItem,
// VCode,
// Agreement,
// Toptips,
// Gallery,
// GalleryDelete,
// Footer,
// FooterText,
// FooterLinks,
// FooterLink,
// LoadMore,
// Preview,
// PreviewHeader,
// PreviewBody,
// PreviewFooter,
// PreviewItem,
// PreviewButton,
// Picker,
// PickerGroup,
// CityPicker,
// Slider,
// Badge,
// //non-standard
// Popup,
// PopupHeader,
// PullToRefresh,
// InfiniteLoader,
// Swiper,
// Page
// };

exports.Button = Button$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-weui.js.map
