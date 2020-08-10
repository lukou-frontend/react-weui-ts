import * as React from 'react';
import PropTypes from 'prop-types';
import './page.less';
/**
 * A Component for a standard page
 *
 */
interface PageProps {
    infiniteLoader: boolean;
    ptr: boolean;
    transition: boolean;
    onLoadMore: (resolve?: () => void, finish?: () => void) => void;
    ptrOnRefresh: (resolve?: () => void, finish?: () => void) => void;
    className?: any;
    style?: React.CSSProperties;
}
interface PageStates {
    ptrRefreshing: boolean;
    contentScrollOnTop: boolean;
}
declare class Page extends React.Component<PageProps, PageStates> {
    static propTypes: {
        /**
         * indicate to use ptr
         *
         */
        ptr: PropTypes.Requireable<boolean>;
        /**
         * function to call when ptr refresh, pass function resolve to finish loading
         *
         */
        ptrOnRefresh: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * indicate to use infiniteloader
         *
         */
        infiniteLoader: PropTypes.Requireable<boolean>;
        /**
         * callback when it's requesting for more content, pass resolve function and finish function
         *
         */
        onLoadMore: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * enable page transition
         *
         */
        transition: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        ptr: boolean;
        ptrOnRefresh: (resolve?: (() => void) | undefined, finish?: (() => void) | undefined) => void;
        infiniteLoader: boolean;
        onLoadMore: (resolve?: (() => void) | undefined, finish?: (() => void) | undefined) => void;
        transition: boolean;
    };
    constructor(props: Readonly<PageProps>);
    UNSAFE_componentWillReceiveProps(newProps: any): void;
    componentWillUnmount(): void;
    handleRefresh(resolve: () => void): void;
    handleContentScroll(e: any): void;
    renderContent(children: {} | null | undefined, ptr: boolean, infiniteLoader: boolean): {} | null | undefined;
    render(): JSX.Element;
}
export default Page;
