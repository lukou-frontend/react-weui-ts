import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";
import * as React from 'react'; // import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Icon from '../icon';

var SearchBar = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  var _super = _createSuper(SearchBar);

  function SearchBar(props) {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _super.call(this, props);
    _this.searchInput = /*#__PURE__*/React.createRef();
    var defaultValue = props.defaultValue;
    _this.state = {
      focus: !!defaultValue,
      text: defaultValue || ''
    };

    if (defaultValue !== '') {
      if (_this.props.onChange) _this.props.onChange(_this.state.text);
    }

    return _this;
  }

  _createClass(SearchBar, [{
    key: "changeHandle",
    value: function changeHandle(e) {
      var text = e.target.value;

      if (this.props.onChange) {
        this.props.onChange(text, e);
      }

      this.setState({
        text: text
      });
    }
  }, {
    key: "cancelHandle",
    value: function cancelHandle(e) {
      this.setState({
        focus: false,
        text: ''
      });
      if (this.props.onCancel) this.props.onCancel(e);
      if (this.props.onChange) this.props.onChange('', e);
    }
  }, {
    key: "clearHandle",
    value: function clearHandle(e) {
      e.stopPropagation();
      this.setState({
        text: ''
      });
      if (this.props.onClear) this.props.onClear(e); // In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all.
      // When render returns null or false, findDOMNode returns null.
      // 这里是截取官网的说明，在ref回调函数内确实会返回null，尤其是配合redux使用的时候，这个时候需要对其进行null判断

      this.searchInput.current.focus(); // ReactDOM.findDOMNode(this.refs.searchInput).focus()

      if (this.props.onChange) this.props.onChange('', e);
    }
  }, {
    key: "blurHandle",
    value: function blurHandle() {
      if (this.state.text === '') {
        this.setState({
          focus: false
        });
      }
    }
  }, {
    key: "submitHandle",
    value: function submitHandle(e) {
      if (this.props.onSubmit) {
        e.stopPropagation();
        this.props.onSubmit(this.state.text, e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          autocomplete = _this$props.autocomplete,
          placeholder = _this$props.placeholder,
          className = _this$props.className,
          searchName = _this$props.searchName;
      var clz = classNames({
        'weui-search-bar': true,
        'weui-search-bar_focusing': this.state.focus
      }, className);
      return /*#__PURE__*/React.createElement("div", {
        className: clz
      }, /*#__PURE__*/React.createElement("form", {
        className: "weui-search-bar__form",
        style: {
          touchAction: 'none'
        },
        onSubmit: this.submitHandle.bind(this)
      }, /*#__PURE__*/React.createElement("div", {
        className: "weui-search-bar__box"
      }, /*#__PURE__*/React.createElement(Icon, {
        value: "search"
      }), /*#__PURE__*/React.createElement("input", {
        ref: this.searchInput,
        type: "search",
        name: searchName,
        className: "weui-search-bar__input",
        placeholder: placeholder,
        onFocus: function onFocus() {
          return _this2.setState({
            focus: true
          });
        },
        onBlur: this.blurHandle.bind(this),
        onChange: this.changeHandle.bind(this),
        value: this.state.text,
        autoComplete: autocomplete
      }), /*#__PURE__*/React.createElement("div", {
        className: "weui-icon-clear",
        onClick: this.clearHandle.bind(this),
        style: {
          touchAction: 'none'
        }
      })), /*#__PURE__*/React.createElement("label", {
        className: "weui-search-bar__label",
        onClick: function onClick() {
          var searchInput = _this2.searchInput;

          if (searchInput.current) {
            searchInput.current.focus();
          }
        },
        style: {
          display: this.state.text ? 'none' : undefined
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        value: "search"
      }), /*#__PURE__*/React.createElement("span", null, placeholder))), /*#__PURE__*/React.createElement("a", {
        className: "weui-search-bar__cancel-btn",
        onClick: this.cancelHandle.bind(this)
      }, this.props.lang.cancel));
    }
  }]);

  return SearchBar;
}(React.Component);

SearchBar.propTypes = {
  /**
   * default value for the searchbar if any
   *
   */
  defaultValue: PropTypes.string,

  /**
   * default place holder text
   *
   */
  placeholder: PropTypes.string,

  /**
   * name of the input component
   *
   */
  searchName: PropTypes.string,

  /**
   * trigger when text change on input pass `text` property
   *
   */
  onChange: PropTypes.func,

  /**
   * trigger when user click clear icon
   *
   */
  onClear: PropTypes.func,

  /**
   * trigger when user click cancel button
   *
   */
  onCancel: PropTypes.func,

  /**
   * trigger when user submit (enter action)
   *
   */
  onSubmit: PropTypes.func,

  /**
   * language object consists of `cancel` property
   *
   */
  lang: PropTypes.object,

  /**
   * 输入字段是否应该启用自动完成功能。on|off
   *
   */
  autocomplete: PropTypes.string
};
SearchBar.defaultProps = {
  placeholder: '搜索',
  searchName: 'a',
  onChange: undefined,
  onClear: undefined,
  onCancel: undefined,
  onSubmit: undefined,
  lang: {
    cancel: '取消'
  },
  autocomplete: 'off'
};
export default SearchBar;