import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import TabBody from './tab_body';
import TabBodyItem from './tab_body_item';
import NavBar from './navbar';
import NavBarItem from './navbar_item';
import TabBar from './tabbar';
import TabBarItem from './tabbar_item';
export default class Tab extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            index: this.props.defaultIndex
        };
    }
    handleHeaderClick(idx) {
        this.setState({ index: idx });
        if (this.props.onChange)
            this.props.onChange(idx);
    }
    parseChild(childrenInput) {
        const ChildHeaders = [];
        const ChildContents = [];
        React.Children.map(childrenInput, (child) => {
            if (!child)
                return;
            const { children } = child.props;
            if (child.type === TabBarItem || child.type === NavBarItem) {
                ChildHeaders.push(child);
                if (children)
                    ChildContents.push(React.createElement(TabBodyItem, { children: children }));
            }
            else if (child.type === TabBodyItem) {
                ChildContents.push(child);
            }
        });
        return { ChildHeaders, ChildContents };
    }
    renderBar(type, children, cls) {
        const { ChildHeaders, ChildContents } = this.parseChild(children);
        let _headers = ChildHeaders.map((item, idx) => {
            return React.cloneElement((item), {
                key: idx,
                active: this.state.index === idx,
                onClick: this.handleHeaderClick.bind(this, idx, item)
            });
        });
        let _contents = ChildContents.map((item, idx) => {
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                tabIndex: idx
            });
        });
        if (type === 'tabbar') {
            return (React.createElement("div", { className: cls },
                React.createElement(TabBody, null, _contents),
                React.createElement(TabBar, null, _headers)));
        }
        else if (type === 'navbar') {
            return (React.createElement("div", { className: cls },
                React.createElement(NavBar, null, _headers),
                React.createElement(TabBody, null, _contents)));
        }
        else {
            return false;
        }
    }
    render() {
        const { children, className, type, ...others } = this.props;
        const divProps = Object.assign({}, others);
        delete divProps.defaultIndex;
        delete divProps.onChange;
        const cls = classNames({
            'weui-tab': true
        }, className);
        if (type === 'normal') {
            return (React.createElement("div", Object.assign({ className: cls }, divProps), children));
        }
        else {
            return this.renderBar(type, children, cls);
        }
    }
}
Tab.propTypes = {
    /**
     * layout of the tab, auto mount components when set to `navbar` or `tabbar`
     *
     */
    type: PropTypes.string,
    /**
     * default select index
     *
     */
    defaultIndex: PropTypes.number,
    onChange: PropTypes.func
};
Tab.defaultProps = {
    type: 'normal',
    defaultIndex: 0
};
