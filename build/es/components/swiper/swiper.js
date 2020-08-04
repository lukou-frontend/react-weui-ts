import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";
import * as React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from '../../utils/classnames';
import './swiper.less';

var Swiper = /*#__PURE__*/function (_React$Component) {
  _inherits(Swiper, _React$Component);

  var _super = _createSuper(Swiper);

  function Swiper(props) {
    var _this;

    _classCallCheck(this, Swiper);

    _this = _super.call(this, props);
    _this.state = {
      containerWidth: 0,
      containerHeight: 0,
      currentIndex: _this.props.defaultIndex,
      //touch
      touching: false,
      og: 0,
      ogTranslate: 0,
      touchId: -1,
      translate: 0,
      animating: false,
      wrapperWidth: 0,
      wrapperHeight: 0
    };
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Swiper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var $container = ReactDOM.findDOMNode(this.refs.container);
      this.setState({
        wrapperWidth: this.props.direction === 'horizontal' ? $container.offsetWidth * this.props.children.length : $container.offsetWidth,
        wrapperHeight: this.props.direction === 'vertical' ? $container.offsetHeight * this.props.children.length : $container.offsetHeight,
        containerWidth: $container.offsetWidth,
        containerHeight: $container.offsetHeight,
        translate: this.props.defaultIndex <= this.props.children.length ? this.props.direction === 'horizontal' ? $container.offsetWidth * -this.props.defaultIndex : $container.offsetHeight * -this.props.defaultIndex : 0
      }); //console.log($container.offsetWidth, $container.offsetHeight)
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      if (this.state.touching || this.props.children.length <= 1) return;
      var og = 0;

      if (this.props.direction === 'horizontal') {
        og = e.targetTouches[0].pageX - this.state.translate;
      } else {
        og = e.targetTouches[0].pageY - this.state.translate;
      }

      this.setState({
        touching: true,
        ogTranslate: this.state.translate,
        touchId: e.targetTouches[0].identifier,
        og: og,
        animating: false
      });
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      if (!this.state.touching || this.props.children.length <= 1) return;
      if (e.targetTouches[0].identifier !== this.state.touchId) return; //prevent move background

      var diff = this.state.translate;

      if (this.props.direction === 'horizontal') {
        var pageX = e.targetTouches[0].pageX;
        diff = pageX - this.state.og;
      } else {
        //vertical
        var pageY = e.targetTouches[0].pageY;
        diff = pageY - this.state.og;
      }

      this.setState({
        translate: diff
      });
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      var _this2 = this;

      if (!this.state.touching || this.props.children.length <= 1) return;
      var translate = this.state.translate;
      var max = this.props.direction === 'horizontal' ? this.state.wrapperWidth - this.state.containerWidth : this.state.wrapperHeight - this.state.containerHeight;
      var currentIndex = this.state.currentIndex;
      var ogIndex = currentIndex;

      if (translate > 0) {
        //start
        translate = 0;
      } else if (translate < -max) {
        //end
        translate = -max;
      } else {
        //default case
        var diff = Math.abs(translate - this.state.ogTranslate);
        var isNext = translate - this.state.ogTranslate < 0 ? true : false; //console.log(translate - this.state.ogTranslate, diff, isNext)

        if (diff >= this.props.threshold) {
          if (isNext) {
            //next slide
            translate = this.state.ogTranslate - (this.props.direction === 'horizontal' ? this.state.containerWidth : this.state.containerHeight);
            currentIndex += 1;
          } else {
            //prev slide
            translate = this.state.ogTranslate + (this.props.direction === 'horizontal' ? this.state.containerWidth : this.state.containerHeight);
            currentIndex -= 1;
          }
        } else {
          //revert back
          translate = this.state.ogTranslate;
        }
      }

      this.setState({
        touching: false,
        og: 0,
        touchId: -1,
        ogTranslate: 0,
        animating: true,
        translate: translate,
        currentIndex: currentIndex
      }, function () {
        return setTimeout(function () {
          return _this2.setState({
            animating: false
          });
        }, _this2.props.speed);
      });
      if (this.props.onChange) this.props.onChange(ogIndex, currentIndex);
    }
  }, {
    key: "renderPagination",
    value: function renderPagination() {
      var _this3 = this;

      // @ts-ignore
      return this.props.children.map(function (child, i) {
        var clx = classNames('react-weui-swiper__pagination-bullet', {
          active: i === _this3.state.currentIndex
        });
        return /*#__PURE__*/React.createElement("span", {
          className: clx,
          key: i
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          height = _this$props.height,
          width = _this$props.width,
          direction = _this$props.direction,
          _this$props$speed = _this$props.speed,
          speed = _this$props$speed === void 0 ? 300 : _this$props$speed,
          indicators = _this$props.indicators,
          onClick = _this$props.onClick;
      var clx = classNames('react-weui-swiper__container', className, {
        'react-weui-swiper__container-horizontal': direction === 'horizontal',
        'react-weui-swiper__container-vertical': direction === 'vertical'
      });
      var containerStyle = {
        height: height ? "".concat(height, "px") : '100%',
        width: width ? "".concat(width, "px") : '100%',
        touchAction: 'none'
      };
      var wrapperStyle = {
        width: this.state.wrapperWidth,
        height: this.state.wrapperHeight,
        transition: this.state.animating ? "transform .".concat(speed / 100, "s") : 'none',
        transform: "translate(".concat(direction === 'horizontal' ? this.state.translate : 0, "px, ").concat(direction === 'vertical' ? this.state.translate : 0, "px)")
      };
      return /*#__PURE__*/React.createElement("div", {
        className: clx,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        style: containerStyle,
        onClick: onClick,
        ref: "container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "react-weui-swiper__wrapper",
        style: wrapperStyle
      }, children.map(function (child, i) {
        return /*#__PURE__*/React.cloneElement(child, {
          className: classNames('react-weui-swiper__item', child.className),
          key: i,
          style: _extends({}, child.props.style, {
            display: direction === 'horizontal' ? 'inline-block' : 'block',
            verticalAlign: direction === 'horizontal' ? 'top' : 'bottom',
            width: _this4.state.containerWidth,
            height: _this4.state.containerHeight
          })
        });
      })), indicators ? /*#__PURE__*/React.createElement("div", {
        className: "react-weui-swiper__pagination"
      }, this.renderPagination()) : false);
    }
  }]);

  return Swiper;
}(React.Component);

Swiper.propTypes = {
  /**
   * height for the container, number in px
   *
   */
  height: PropTypes.number,

  /**
   * width for the container, number in px
   *
   */
  width: PropTypes.number,

  /**
   * threshold for the swiper, number in px
   *
   */
  threshold: PropTypes.number,

  /**
   * speed for the slide transition, number in ms
   *
   */
  speed: PropTypes.number,

  /**
   * default slider index
   *
   */
  defaultIndex: PropTypes.number,

  /**
   * direction of swiper
   *
   */
  direction: PropTypes.oneOf(['vertical', 'horizontal']),

  /**
   * show indicators
   *
   */
  indicators: PropTypes.bool,

  /**
   * callback when slide change is trigger, pass indexs of (prev, next)
   *
   */
  onChange: PropTypes.func
};
Swiper.defaultProps = {
  height: null,
  width: null,
  defaultIndex: 0,
  direction: 'horizontal',
  threshold: 50,
  speed: 300,
  indicators: true
};
export default Swiper;