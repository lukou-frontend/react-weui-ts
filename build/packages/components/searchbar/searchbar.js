import * as React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Icon from '../icon';
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.searchInput = React.createRef();
        this.state = {
            focus: this.props.defaultValue ? true : false,
            clearing: false,
            text: this.props.defaultValue ? this.props.defaultValue : ''
        };
        if (this.props.defaultValue !== '') {
            if (this.props.onChange)
                this.props.onChange(this.state.text);
        }
    }
    changeHandle(e) {
        let text = e.target.value;
        if (this.props.onChange)
            this.props.onChange(text, e);
        this.setState({ text });
    }
    cancelHandle(e) {
        this.setState({
            focus: false,
            text: ''
        });
        if (this.props.onCancel)
            this.props.onCancel(e);
        if (this.props.onChange)
            this.props.onChange('', e);
    }
    clearHandle(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ text: '', clearing: true });
        if (this.props.onClear)
            this.props.onClear(e);
        // In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all.
        // When render returns null or false, findDOMNode returns null.
        // 这里是截取官网的说明，在ref回调函数内确实会返回null，尤其是配合redux使用的时候，这个时候需要对其进行null判断
        this.searchInput.current.focus();
        // ReactDOM.findDOMNode(this.refs.searchInput).focus()
        if (this.props.onChange)
            this.props.onChange('', e);
    }
    blurHandle() {
        if (this.state.text === '') {
            this.setState({ focus: false });
        }
    }
    submitHandle(e) {
        if (this.props.onSubmit) {
            e.preventDefault();
            e.stopPropagation();
            this.props.onSubmit(this.state.text, e);
        }
    }
    render() {
        const { autocomplete, placeholder, className, searchName } = this.props;
        const clz = classNames({
            'weui-search-bar': true,
            'weui-search-bar_focusing': this.state.focus
        }, className);
        return (React.createElement("div", { className: clz },
            React.createElement("form", { className: 'weui-search-bar__form', onSubmit: this.submitHandle.bind(this) },
                React.createElement("div", { className: 'weui-search-bar__box' },
                    React.createElement(Icon, { value: 'search' }),
                    React.createElement("input", { ref: this.searchInput, type: 'search', name: searchName, className: 'weui-search-bar__input', placeholder: placeholder, onFocus: () => this.setState({ focus: true }), onBlur: this.blurHandle.bind(this), onChange: this.changeHandle.bind(this), value: this.state.text, autoComplete: autocomplete }),
                    React.createElement("a", { className: 'weui-icon-clear', onClick: this.clearHandle.bind(this) })),
                React.createElement("label", { className: 'weui-search-bar__label', onClick: () => {
                        let searchInput = this.searchInput;
                        if (searchInput.current) {
                            searchInput.current.focus();
                        }
                    }, style: { display: this.state.text ? 'none' : undefined } },
                    React.createElement(Icon, { value: 'search' }),
                    React.createElement("span", null, placeholder))),
            React.createElement("a", { className: 'weui-search-bar__cancel-btn', onClick: this.cancelHandle.bind(this) }, this.props.lang.cancel)));
    }
}
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
    lang: PropTypes.object
};
SearchBar.defaultProps = {
    placeholder: '搜索',
    searchName: 'q',
    onChange: undefined,
    onClear: undefined,
    onCancel: undefined,
    onSubmit: undefined,
    lang: { cancel: '取消' },
    autocomplete: 'off'
};
export default SearchBar;
