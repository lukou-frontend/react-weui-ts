import * as React from 'react';
import PropTypes from 'prop-types';
import './infiniteloader.less';
/**
 *  A Container trigger loading once it reach certain scrolltop
 *
 */
interface InfiniteLoaderProps {
    disable?: boolean;
    resetStatus?: boolean;
    resolveStatus?: boolean;
    height?: string;
    loaderDefaultIcon: object;
    loaderLoadingIcon: object;
    onLoadMore: (resolveLoading: () => void, finish?: () => void) => void;
    onScroll?: (e?: Event) => void;
    onScrollEnd?: () => void;
    triggerPercent: number;
    className?: any;
    children?: React.ReactNode;
}
interface InfiniteLoaderStates {
    loading: boolean;
    finish: boolean;
    scrollTimer: any;
}
declare class InfiniteLoader extends React.Component<InfiniteLoaderProps, InfiniteLoaderStates> {
    static propTypes: {
        /**
         * height for the container, use string like '10px', default for '100vh'
         *
         */
        height: PropTypes.Requireable<string>;
        /**
         * element(icon) for default loader when there is no more content
         *
         */
        loaderDefaultIcon: PropTypes.Requireable<object>;
        /**
         * element(icon) for loading loader
         *
         */
        loaderLoadingIcon: PropTypes.Requireable<object>;
        /**
         * percentage of scrollTop to trigger loading
         *
         */
        triggerPercent: PropTypes.Requireable<number>;
        /**
         * callback when user scroll the content, pass event
         *
         */
        onScroll: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * callback when user did not scroll for 150ms
         *
         */
        onScrollEnd: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * callback when it's requesting for more content, pass resolve function and finish function
         *
         */
        onLoadMore: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * disable the loader
         *
         */
        disable: PropTypes.Requireable<boolean>;
        /**
         * reset the finish status
         */
        resetStatus: PropTypes.Requireable<boolean>;
        resolveStatus: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        height: string | undefined;
        triggerPercent: number;
        loaderLoadingIcon: object;
        loaderDefaultIcon: object;
        disable: boolean;
        resetStatus: boolean;
        resolveStatus: boolean;
    };
    constructor(props: InfiniteLoaderProps);
    componentWillReceiveProps(nextProps: any): void;
    reset(): void;
    finish(): void;
    resolveLoading(): void;
    scrollHandle(e: any): void;
    render(): JSX.Element;
}
export default InfiniteLoader;
