import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import PullToRefresh from '../ptr/index';
import InfiniteLoader from '../infiniteloader/index';
import './page.less';

var Page = /*#__PURE__*/function (_React$Component) {
  _inherits(Page, _React$Component);

  var _super = _createSuper(Page);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _super.call(this, props);
    _this.state = {
      ptrRefreshing: false,
      contentScrollOnTop: true
    };
    _this.handleRefresh = _this.handleRefresh.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Page, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.infiniteLoader) {
        this.setState({
          contentScrollOnTop: true
        });
      } else {
        this.setState({
          contentScrollOnTop: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {//console.log('unmounting page');
    }
  }, {
    key: "handleRefresh",
    value: function handleRefresh(resolve) {
      var _this2 = this;

      this.setState({
        ptrRefreshing: true
      }, function () {
        _this2.props.ptrOnRefresh(function () {
          _this2.setState({
            ptrRefreshing: false
          });

          resolve();
        });
      });
    }
  }, {
    key: "handleContentScroll",
    value: function handleContentScroll(e) {
      // 标记
      if (e.target.scrollTop <= 0) {
        this.setState({
          contentScrollOnTop: true
        });
      } else {
        this.setState({
          contentScrollOnTop: false
        });
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent(children, ptr, infiniteLoader) {
      var _this3 = this;

      if (!infiniteLoader && !ptr) return children;
      var ContentWithInfiniteLoader = /*#__PURE__*/React.createElement(InfiniteLoader, {
        height: "100%",
        disable: this.state.ptrRefreshing,
        onScroll: function onScroll(e) {
          return _this3.handleContentScroll(e);
        },
        onLoadMore: this.props.onLoadMore
      }, children);
      if (!ptr && infiniteLoader) return ContentWithInfiniteLoader;
      if (ptr && !infiniteLoader) return /*#__PURE__*/React.createElement(PullToRefresh, {
        onRefresh: this.handleRefresh,
        disable: !this.state.contentScrollOnTop
      }, children);
      return /*#__PURE__*/React.createElement(PullToRefresh, {
        onRefresh: this.handleRefresh,
        disable: !this.state.contentScrollOnTop
      }, ContentWithInfiniteLoader);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          style = _this$props.style,
          className = _this$props.className,
          infiniteLoader = _this$props.infiniteLoader,
          transition = _this$props.transition,
          ptr = _this$props.ptr;
      var cls = classNames('weui-page', className);
      return /*#__PURE__*/React.createElement("div", {
        className: cls,
        style: _extends({}, {
          animationName: transition ? 'pageInRight' : ''
        }, style)
      }, this.renderContent(children, ptr, infiniteLoader));
    }
  }]);

  return Page;
}(React.Component);

Page.propTypes = {
  /**
   * indicate to use ptr
   *
   */
  ptr: PropTypes.bool,

  /**
   * function to call when ptr refresh, pass function resolve to finish loading
   *
   */
  ptrOnRefresh: PropTypes.func,

  /**
   * indicate to use infiniteloader
   *
   */
  infiniteLoader: PropTypes.bool,

  /**
   * callback when it's requesting for more content, pass resolve function and finish function
   *
   */
  onLoadMore: PropTypes.func,

  /**
   * enable page transition
   *
   */
  transition: PropTypes.bool
};
Page.defaultProps = {
  ptr: true,
  ptrOnRefresh: function ptrOnRefresh(resolve) {
    setTimeout(function () {
      resolve();
    }, 1000);
  },
  infiniteLoader: true,
  onLoadMore: function onLoadMore(finish) {
    //mock request
    setTimeout(function () {
      finish();
    }, 1000);
  },
  transition: true
};
export default Page;