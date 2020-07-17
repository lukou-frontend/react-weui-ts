import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import LoadMore from '../loadmore';

import './infiniteloader.less';

/**
 *  A Container trigger loading once it reach certain scrolltop
 *
 */
interface InfiniteLoaderProps {
  disable?: boolean,
  height?: string,
  loaderDefaultIcon: object,
  loaderLoadingIcon: object,
  onLoadMore: (resolveLoading: () => void, finish?: () => void) => void,
  onScroll?: (e?: Event) => void,
  onScrollEnd?: () => void,
  triggerPercent: number,
  className?: any,
  children?: React.ReactNode
}
interface InfiniteLoaderStates {
  loading: boolean,
  finish: boolean,
  scrollTimer: any
}
class InfiniteLoader extends React.Component<InfiniteLoaderProps, InfiniteLoaderStates>{

     static propTypes = {
        /**
         * height for the container, use string like '10px', default for '100vh'
         *
         */
        height: PropTypes.string,
        /**
         * element(icon) for default loader when there is no more content
         *
         */
        loaderDefaultIcon: PropTypes.object,
        /**
         * element(icon) for loading loader
         *
         */
        loaderLoadingIcon: PropTypes.object,
        /**
         * percentage of scrollTop to trigger loading
         *
         */
        triggerPercent: PropTypes.number,
        /**
         * callback when user scroll the content, pass event
         *
         */
        onScroll: PropTypes.func,
        /**
         * callback when user did not scroll for 150ms
         *
         */
        onScrollEnd: PropTypes.func,
        /**
         * callback when it's requesting for more content, pass resolve function and finish function
         *
         */
        onLoadMore: PropTypes.func,
        /**
         * disable the loader
         *
         */
        disable: PropTypes.bool,
        /**
         * reset the finish status
         */
        resetStatus: PropTypes.bool
    };

    static defaultProps = {
        height: '100vh' as InfiniteLoaderProps['height'],
        triggerPercent: 75 as InfiniteLoaderProps['triggerPercent'],
        loaderLoadingIcon: <LoadMore loading> Loading... </LoadMore> as InfiniteLoaderProps['loaderLoadingIcon'],
        loaderDefaultIcon: <LoadMore showLine> No Data</LoadMore> as InfiniteLoaderProps['loaderDefaultIcon'],
        disable: false
    }

    constructor(props: InfiniteLoaderProps){
        super(props);

        this.state = {
            loading: false,
            finish: false,
            scrollTimer: null
        };

        this.scrollHandle = this.scrollHandle.bind(this);
        this.resolveLoading = this.resolveLoading.bind(this);
        this.finish = this.finish.bind(this);
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.resetStatus) {
            this.reset();
        }
    }

    reset(){
        this.setState({
            loading: false,
            finish: false
        });
    }

    finish(){
        this.setState({
            loading: false,
            finish: true
        });
    }

    resolveLoading(){
        this.setState({
            loading: false,
            finish: false
        });
    }

    scrollHandle(e: any){
        if (this.props.onScroll) this.props.onScroll(e);
        if (this.state.loading || this.state.finish || this.props.disable || (e.target as HTMLDivElement).scrollTop === 0) return;

        //setup for scrollend event
        clearTimeout(this.state.scrollTimer);
        this.setState({ scrollTimer: setTimeout( ()=>{
            if (this.props.onScrollEnd) this.props.onScrollEnd();
        }, 150) });

        let target = e.target;
        let scrollPercent = Math.floor(( (target.scrollTop + target.clientHeight) / target.scrollHeight) * 100);

        if (scrollPercent > this.props.triggerPercent) {
            this.setState({
                loading: true
            });

            this.props.onLoadMore(this.resolveLoading, this.finish);
        }
    }

    render(){

        const { children, className, height, triggerPercent, disable, loaderLoadingIcon, loaderDefaultIcon, onScrollEnd, onScroll, onLoadMore, ...domProps } = this.props;
        const clx = classNames( 'react-weui-infiniteloader', className );

        let containerStyle = {
            height,
        };

        let contentStyle = {
            overflow: disable ? 'hidden' : 'scroll'
        };

        let loaderStyle = {
            display: this.state.loading || this.state.finish ? 'block' : 'none'
        };

        return (
            <div
                className={clx}
                style={containerStyle}
                onScroll={this.scrollHandle}
                {...domProps}
            >
                <div
                    className="react-weui-infiniteloader__content"
                    style={contentStyle}
                    ref="container"
                >
                    { children }
                    <div style={loaderStyle}>
                        { this.state.finish ? loaderDefaultIcon : this.state.loading ? loaderLoadingIcon : false }
                    </div>
                </div>
            </div>
        );
    }
}

export default InfiniteLoader;
