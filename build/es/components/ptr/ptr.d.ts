/// <reference types="node" />
import * as React from 'react';
import PropTypes from 'prop-types';
import { ClassValue } from '../../utils/classnames';
import './ptr.less';
/**
 *  A Pull to refresh container enable user to pull the container and refresh it's content
 *
 */
interface PullToRefreshState {
    pullPercent: number;
    touching: boolean;
    ogY: number;
    touchId: number;
    animating: boolean;
    loading: boolean;
    initScrollTop: number;
}
interface PullToRefreshProps {
    disable: boolean;
    height: string;
    loaderDefaultIcon: (progress: number) => void;
    loaderHeight: number;
    loaderLoadingIcon: any;
    onRefresh: (func: Function) => void;
    className?: ClassValue;
}
declare class PullToRefresh extends React.Component<PullToRefreshProps, PullToRefreshState> {
    static propTypes: {
        /**
         * height for the container, use string like '10px', default for '100%'
         *
         */
        height: PropTypes.Requireable<string>;
        /**
         * height for the loader
         *
         */
        loaderHeight: PropTypes.Requireable<number>;
        /**
         * element(icon) for default loader, function require, pass in pulldown progress
         *
         */
        loaderDefaultIcon: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * element(icon) for loading loader
         *
         */
        loaderLoadingIcon: PropTypes.Requireable<any>;
        /**
         * callback when refresh is request, pass resolve function
         *
         */
        onRefresh: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * disable the loader
         *
         */
        disable: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        height: string;
        loaderHeight: number;
        loaderDefaultIcon: (progress: number) => JSX.Element;
        loaderLoadingIcon: JSX.Element;
        onRefresh: (resolve: Function) => NodeJS.Timeout;
        disable: boolean;
    };
    constructor(props: PullToRefreshProps);
    resolveRefresh(): void;
    handleTouchStart(e: React.TouchEvent): void;
    handleTouchMove(e: React.TouchEvent): void;
    handleTouchEnd(): void;
    render(): JSX.Element;
}
export default PullToRefresh;
