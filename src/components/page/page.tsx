import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import PullToRefresh from '../ptr/index';
import InfiniteLoader from '../infiniteloader/index';
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
class Page extends React.Component<PageProps, PageStates> {
    static propTypes = {
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
        transition: PropTypes.bool,
    };

    static defaultProps = {
        ptr: true as PageProps['ptr'],
        ptrOnRefresh: ((resolve: () => void) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        }) as PageProps['ptrOnRefresh'],
        infiniteLoader: false as PageProps['infiniteLoader'],
        onLoadMore: ((finish: () => void) => {
            //mock request
            setTimeout(() => {
                finish();
            }, 1000);
        }) as PageProps['onLoadMore'],
        transition: true as PageProps['transition'],
    };

    constructor(props: Readonly<PageProps>) {
        super(props);

        this.state = {
            ptrRefreshing: false,
            contentScrollOnTop: true,
        };

        this.handleRefresh = this.handleRefresh.bind(this);
    }

    UNSAFE_componentWillReceiveProps(newProps: any) {
        if (newProps.infiniteLoader) {
            this.setState({ contentScrollOnTop: true });
        } else {
            this.setState({ contentScrollOnTop: false });
        }
    }

    componentWillUnmount() {
        //console.log('unmounting page');
    }

    handleRefresh(resolve: () => void) {
        this.setState(
            {
                ptrRefreshing: true,
            },
            () => {
                this.props.ptrOnRefresh(() => {
                    this.setState({
                        ptrRefreshing: false,
                    });
                    resolve();
                });
            },
        );
    }

    handleContentScroll(e: any) {
        // 标记
        if ((e.target as HTMLDivElement).scrollTop <= 0) {
            this.setState({ contentScrollOnTop: true });
        } else {
            this.setState({ contentScrollOnTop: false });
        }
    }

    renderContent(
        children: {} | null | undefined,
        ptr: boolean,
        infiniteLoader: boolean,
    ) {
        if (!infiniteLoader && !ptr) return children;

        const ContentWithInfiniteLoader = (
            <InfiniteLoader
                height="100%"
                disable={this.state.ptrRefreshing}
                onScroll={(e) => this.handleContentScroll(e)}
                onLoadMore={this.props.onLoadMore}
                resolveStatus
            >
                {children}
            </InfiniteLoader>
        );
        if (!ptr && infiniteLoader) return ContentWithInfiniteLoader;
        if (ptr && !infiniteLoader)
            return (
                <PullToRefresh
                    onRefresh={this.handleRefresh}
                    disable={!this.state.contentScrollOnTop}
                >
                    {children}
                </PullToRefresh>
            );

        return (
            <PullToRefresh
                onRefresh={this.handleRefresh}
                disable={!this.state.contentScrollOnTop}
            >
                {ContentWithInfiniteLoader}
            </PullToRefresh>
        );
    }

    render() {
        const {
            children,
            style,
            className,
            infiniteLoader,
            transition,
            ptr,
        } = this.props;
        const cls = classNames('weui-page', className);
        const styles = {
            animationName: transition ? 'pageInRight' : '',
            ...style,
        };
        return (
            <div className={cls} style={styles}>
                {this.renderContent(children, ptr, infiniteLoader)}
            </div>
        );
    }
}

export default Page;
