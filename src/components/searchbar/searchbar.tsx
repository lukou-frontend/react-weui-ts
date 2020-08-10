import * as React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames, { ClassValue } from '../../utils/classnames';
import Icon from '../icon';

/**
 *  weui search component
 *
 */
interface SearchBarState {
    text: string;
    focus: boolean;
}
interface SearchBarProps {
    defaultValue?: string;
    autocomplete?: string;
    lang: { cancel: string };
    onCancel?: (e: React.TouchEvent) => void;
    onChange?: (
        text: string,
        e?: React.ChangeEvent<HTMLInputElement> | React.TouchEvent,
    ) => void;
    onClear?: (e: React.TouchEvent) => void;
    onSubmit?: (text: string, e: React.SyntheticEvent<HTMLFormElement>) => void;
    placeholder?: string;
    searchName?: string;
    className?: ClassValue;
}
interface DefaultProps
    extends Pick<
        SearchBarProps,
        | 'placeholder'
        | 'searchName'
        | 'onChange'
        | 'onClear'
        | 'onCancel'
        | 'onSubmit'
        | 'lang'
        | 'autocomplete'
    > {}
class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    private searchInput = React.createRef<HTMLInputElement>();

    static propTypes = {
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
        autocomplete: PropTypes.string,
    };

    static defaultProps: DefaultProps = {
        placeholder: '搜索',
        searchName: 'a',
        onChange: undefined,
        onClear: undefined,
        onCancel: undefined,
        onSubmit: undefined,
        lang: { cancel: '取消' },
        autocomplete: 'off',
    };

    constructor(props: SearchBarProps) {
        super(props);
        const { defaultValue } = props;
        this.state = {
            focus: !!defaultValue,
            text: defaultValue || '',
        };

        if (defaultValue !== '') {
            if (this.props.onChange) this.props.onChange(this.state.text);
        }
    }

    changeHandle(e: React.ChangeEvent<HTMLInputElement>) {
        const text = e.target.value;
        if (this.props.onChange) {
            this.props.onChange(text, e);
        }
        this.setState({ text });
    }

    cancelHandle(e: React.TouchEvent) {
        this.setState({
            focus: false,
            text: '',
        });
        if (this.props.onCancel) this.props.onCancel(e);
        if (this.props.onChange) this.props.onChange('', e);
    }

    clearHandle(e: React.TouchEvent) {
        e.stopPropagation();

        this.setState({ text: '' });
        if (this.props.onClear) this.props.onClear(e);
        // In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all.
        // When render returns null or false, findDOMNode returns null.
        // 这里是截取官网的说明，在ref回调函数内确实会返回null，尤其是配合redux使用的时候，这个时候需要对其进行null判断
        this.searchInput.current!.focus();
        // ReactDOM.findDOMNode(this.refs.searchInput).focus()
        if (this.props.onChange) this.props.onChange('', e);
    }

    blurHandle() {
        if (this.state.text === '') {
            this.setState({ focus: false });
        }
    }

    submitHandle(e: React.SyntheticEvent<HTMLFormElement>) {
        if (this.props.onSubmit) {
            e.stopPropagation();
            this.props.onSubmit(this.state.text, e);
        }
    }

    render() {
        const { autocomplete, placeholder, className, searchName } = this.props;
        const clz = classNames(
            {
                'weui-search-bar': true,
                'weui-search-bar_focusing': this.state.focus,
            },
            className,
        );

        return (
            <div className={clz}>
                <form
                    className="weui-search-bar__form"
                    style={{ touchAction: 'none' }}
                    onSubmit={this.submitHandle.bind(this)}
                >
                    <div className="weui-search-bar__box">
                        <Icon value="search" />
                        <input
                            ref={this.searchInput}
                            type="search"
                            name={searchName}
                            className="weui-search-bar__input"
                            placeholder={placeholder}
                            onFocus={() => this.setState({ focus: true })}
                            onBlur={this.blurHandle.bind(this)}
                            onChange={this.changeHandle.bind(this)}
                            value={this.state.text}
                            autoComplete={autocomplete}
                        />
                        {/*React will not trigger onMouseDown when not onClick presented*/}
                        <div
                            className="weui-icon-clear"
                            onClick={this.clearHandle.bind(this)}
                            style={{ touchAction: 'none' }}
                        />
                    </div>
                    <label
                        className="weui-search-bar__label"
                        onClick={() => {
                            const { searchInput } = this;
                            if (searchInput.current) {
                                searchInput.current!.focus();
                            }
                        }}
                        style={{
                            display: this.state.text ? 'none' : undefined,
                        }}
                    >
                        <Icon value="search" />
                        <span>{placeholder}</span>
                    </label>
                </form>
                <a
                    className="weui-search-bar__cancel-btn"
                    onClick={this.cancelHandle.bind(this)}
                >
                    {this.props.lang.cancel}
                </a>
            </div>
        );
    }
}

export default SearchBar;
