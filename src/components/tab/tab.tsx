import * as React from 'react';
import PropTypes from 'prop-types';
import classNames, { ClassValue } from '../../utils/classnames';

import TabBody from './tab_body';
import TabBodyItem from './tab_body_item';
import NavBar from './navbar';
import NavBarItem from './navbar_item';
import TabBar from './tabbar';
import TabBarItem from './tabbar_item';

/**
 *  Weui Tab component, can be auto mount items or mannually display items
 *
 */
interface TabProps {
    defaultIndex?: number;
    type?: 'normal' | 'tabbar' | 'navbar';
    onChange?: (index: number) => void;
    className?: ClassValue;
    children: React.ReactElement[];
    [key: string]: any;
}
export default class Tab extends React.Component<TabProps> {
    static propTypes = {
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
        onChange: PropTypes.func,
    };

    static defaultProps = {
        type: 'normal',
        defaultIndex: 0,
    };

    state = {
        index: this.props.defaultIndex,
    };

    handleHeaderClick(idx: number) {
        this.setState({ index: idx });
        if (this.props.onChange) this.props.onChange(idx);
    }

    // eslint-disable-next-line class-methods-use-this
    parseChild(childrenInput: React.ReactElement[]) {
        const ChildHeaders: React.ReactElement[] = [];
        const ChildContents: React.ReactElement[] = [];

        React.Children.map(childrenInput, (child) => {
            if (!child) return;
            const { children } = child.props;
            if (child.type === TabBarItem || child.type === NavBarItem) {
                ChildHeaders.push(child);
                if (children)
                    ChildContents.push(<TabBodyItem>{children}</TabBodyItem>);
            } else if (child.type === TabBodyItem) {
                ChildContents.push(child);
            }
        });

        return { ChildHeaders, ChildContents };
    }

    renderBar(type: string, children: React.ReactElement[], cls: string) {
        const { ChildHeaders, ChildContents } = this.parseChild(children);

        const newHeaders = ChildHeaders.map((item, idx) => {
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                onClick: this.handleHeaderClick.bind(this, idx, item),
            });
        });

        const newContents = ChildContents.map((item, idx) => {
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                tabIndex: idx,
            });
        });

        if (type === 'tabbar') {
            return (
                <div className={cls}>
                    <TabBody>{newContents}</TabBody>
                    <TabBar>{newHeaders}</TabBar>
                </div>
            );
        }
        if (type === 'navbar') {
            return (
                <div className={cls}>
                    <NavBar>{newHeaders}</NavBar>
                    <TabBody>{newContents}</TabBody>
                </div>
            );
        }
        return false;
    }

    render() {
        const { children, className, type, ...others } = this.props;
        const divProps: Omit<TabProps, 'defaultIndex' | 'onChange'> = {
            ...others,
        };
        delete divProps.defaultIndex;
        delete divProps.onChange;

        const cls = classNames(
            {
                'weui-tab': true,
            },
            className,
        );

        if (type === 'normal') {
            return (
                <div className={cls} {...divProps}>
                    {children}
                </div>
            );
        }
        return this.renderBar(type, children, cls);
    }
}
