import * as React from 'react';
import PropTypes from 'prop-types';
import classNames, { ClassValue } from '../../utils/classnames';
import Icon from '../icon';
import LoadMore from '../loadmore';

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
class PullToRefresh extends React.Component<
    PullToRefreshProps,
    PullToRefreshState
> {
    private contentRef = React.createRef<HTMLDivElement>();

    static propTypes = {
        /**
         * height for the container, use string like '10px', default for '100%'
         *
         */
        height: PropTypes.string,
        /**
         * height for the loader
         *
         */
        loaderHeight: PropTypes.number,
        /**
         * element(icon) for default loader, function require, pass in pulldown progress
         *
         */
        loaderDefaultIcon: PropTypes.func,
        /**
         * element(icon) for loading loader
         *
         */
        loaderLoadingIcon: PropTypes.any,
        /**
         * callback when refresh is request, pass resolve function
         *
         */
        onRefresh: PropTypes.func,
        /**
         * disable the loader
         *
         */
        disable: PropTypes.bool,
    };

    static defaultProps = {
        height: '100%',
        loaderHeight: 100,
        loaderDefaultIcon: (progress: number) => {
            const style = {
                transform: `rotate(-${
                    progress !== 100 ? progress * 1.8 : 0
                }deg)`,
                color: progress !== 100 ? '#5f5f5f' : '#1AAD19',
            };
            return (
                <div style={{ flex: 1, padding: '5px' }}>
                    <Icon
                        value={progress !== 100 ? 'download' : 'success'}
                        style={style}
                    />
                </div>
            );
        },
        loaderLoadingIcon: <LoadMore loading />,
        onRefresh: (resolve: Function) => setTimeout(() => resolve(), 1000),
        disable: false,
    };

    constructor(props: PullToRefreshProps) {
        super(props);

        this.state = {
            pullPercent: 0,
            touching: false,
            ogY: 0,
            touchId: -1,
            animating: false,
            loading: false,
            initScrollTop: 0,
        };

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.resolveRefresh = this.resolveRefresh.bind(this);
    }

    resolveRefresh() {
        this.setState(
            {
                loading: false,
                animating: true,
                pullPercent: 0,
            },
            () => {
                setTimeout(() => this.setState({ animating: false }), 500);
            },
        );
    }

    handleTouchStart(e: React.TouchEvent) {
        if (this.state.touching || this.state.loading || this.props.disable)
            return;

        const $content = this.contentRef.current;
        this.setState((prevState) => ({
            touching: true,
            touchId: e.targetTouches[0].identifier,
            animating: false,
            initScrollTop: $content.scrollTop,
            ogY:
                prevState.pullPercent === 0
                    ? e.targetTouches[0].pageY
                    : e.targetTouches[0].pageY - prevState.pullPercent,
        }));
    }

    handleTouchMove(e: React.TouchEvent) {
        if (!this.state.touching || this.state.loading || this.props.disable)
            return;
        if (e.targetTouches[0].identifier !== this.state.touchId) return;

        const { pageY } = e.targetTouches[0];
        // eslint-disable-next-line react/no-access-state-in-setstate
        let diffY = pageY - this.state.ogY;

        //if it's scroll
        if (diffY < 0) return;

        //if it's not at top
        const $content = this.contentRef.current;
        if ($content.scrollTop > 0) return;

        diffY =
            diffY - this.state.initScrollTop > 100
                ? 100
                : diffY - this.state.initScrollTop;

        this.setState({
            pullPercent: diffY,
        });
    }

    handleTouchEnd() {
        if (!this.state.touching || this.state.loading || this.props.disable)
            return;

        let { pullPercent } = this.state;
        let loading = false;

        if (pullPercent === 100) {
            loading = true;
        } else {
            pullPercent = 0;
        }

        this.setState(
            {
                touching: false,
                ogY: 0,
                touchId: -1,
                initScrollTop: 0,
                animating: loading,
                pullPercent,
                loading,
            },
            () => {
                //triger after ui change
                if (loading) this.props.onRefresh(this.resolveRefresh);
            },
        );
    }

    render() {
        const {
            className,
            children,
            height,
            loaderHeight,
            loaderDefaultIcon,
            loaderLoadingIcon,
            onRefresh,
            disable,
            ...domProps
        } = this.props;
        const cls = classNames('react-weui-ptr', className);

        const containerStyle = {
            height,
        };

        const loaderStyle = {
            //transform: `translate(0, ${this.state.pullPercent / 2}px)`,
            height: loaderHeight,
            marginTop: `${
                -loaderHeight + this.state.pullPercent / (100 / loaderHeight)
            }px`,
            transition: this.state.animating ? 'all .5s' : 'none',
        };

        return (
            <div className={cls} style={containerStyle} {...domProps}>
                <div className="react-weui-ptr__loader" style={loaderStyle}>
                    {this.state.loading
                        ? loaderLoadingIcon
                        : loaderDefaultIcon(this.state.pullPercent)}
                </div>
                <div
                    className="react-weui-ptr__content"
                    style={{ touchAction: 'none' }}
                    ref={this.contentRef}
                    onTouchStart={this.handleTouchStart}
                    onTouchMove={this.handleTouchMove}
                    onTouchEnd={this.handleTouchEnd}
                >
                    {children}
                </div>
            </div>
        );
    }
}

export default PullToRefresh;
