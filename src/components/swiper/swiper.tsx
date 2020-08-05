import * as React from 'react';
import PropTypes from 'prop-types';
import classNames, { ClassValue } from '../../utils/classnames';

import './swiper.less';

/**
 *   The ultimate mobile swipe component
 *
 */
interface SwiperChildren extends React.ReactElement {
    className?: ClassValue;
}
interface SwiperProps {
    height?: number;
    width?: number;
    className?: ClassValue;
    defaultIndex: number;
    direction?: 'horizontal' | 'vertical';
    speed?: number;
    threshold: number;
    indicators?: boolean;
    onChange?: (ogIndex: number, currentIndex: number) => void;
    onClick?: React.MouseEventHandler<HTMLElement>;
    children: SwiperChildren[];
}
interface SwiperState {
    containerWidth: number;
    containerHeight: number;
    currentIndex: number;

    //touch
    touching: boolean;
    og: number;
    ogTranslate: number;
    touchId: number;
    translate: number;
    animating: boolean;
    wrapperWidth: number;
    wrapperHeight: number;
}
interface DefaultProps
    extends Pick<
        SwiperProps,
        | 'height'
        | 'width'
        | 'defaultIndex'
        | 'direction'
        | 'threshold'
        | 'speed'
        | 'indicators'
    > {}
class Swiper extends React.Component<SwiperProps, SwiperState> {
    private containerRef = React.createRef<HTMLDivElement>();

    static propTypes = {
        /**
         * height for the container, number in px
         *
         */
        height: PropTypes.number,
        /**
         * width for the container, number in px
         *
         */
        width: PropTypes.number,
        /**
         * threshold for the swiper, number in px
         *
         */
        threshold: PropTypes.number,
        /**
         * speed for the slide transition, number in ms
         *
         */
        speed: PropTypes.number,
        /**
         * default slider index
         *
         */
        defaultIndex: PropTypes.number,
        /**
         * direction of swiper
         *
         */
        direction: PropTypes.oneOf(['vertical', 'horizontal']),
        /**
         * show indicators
         *
         */
        indicators: PropTypes.bool,
        /**
         * callback when slide change is trigger, pass indexs of (prev, next)
         *
         */
        onChange: PropTypes.func,
    };

    static defaultProps: DefaultProps = {
        height: null,
        width: null,
        defaultIndex: 0,
        direction: 'horizontal',
        threshold: 50,
        speed: 300,
        indicators: true,
    };

    constructor(props: SwiperProps) {
        super(props);

        this.state = {
            containerWidth: 0,
            containerHeight: 0,
            currentIndex: this.props.defaultIndex,

            //touch
            touching: false,
            og: 0,
            ogTranslate: 0,
            touchId: -1,
            translate: 0,
            animating: false,
            wrapperWidth: 0,
            wrapperHeight: 0,
        };

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }

    componentDidMount() {
        const $container = this.containerRef.current;

        this.setState({
            wrapperWidth:
                this.props.direction === 'horizontal'
                    ? $container.offsetWidth * this.props.children.length
                    : $container.offsetWidth,
            wrapperHeight:
                this.props.direction === 'vertical'
                    ? $container.offsetHeight * this.props.children.length
                    : $container.offsetHeight,
            containerWidth: $container.offsetWidth,
            containerHeight: $container.offsetHeight,
            translate:
                this.props.defaultIndex <= this.props.children.length
                    ? this.props.direction === 'horizontal'
                        ? $container.offsetWidth * -this.props.defaultIndex
                        : $container.offsetHeight * -this.props.defaultIndex
                    : 0,
        });
        //console.log($container.offsetWidth, $container.offsetHeight)
    }

    handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
        if (this.state.touching || this.props.children.length <= 1) return;
        let og = 0;

        if (this.props.direction === 'horizontal') {
            og = e.targetTouches[0].pageX - this.state.translate;
        } else {
            og = e.targetTouches[0].pageY - this.state.translate;
        }

        this.setState((prevState) => ({
            touching: true,
            ogTranslate: prevState.translate,
            touchId: e.targetTouches[0].identifier,
            og,
            animating: false,
        }));
    }

    handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
        if (!this.state.touching || this.props.children.length <= 1) return;
        if (e.targetTouches[0].identifier !== this.state.touchId) return;

        //prevent move background
        // eslint-disable-next-line react/no-access-state-in-setstate
        let diff = this.state.translate;

        if (this.props.direction === 'horizontal') {
            const { pageX } = e.targetTouches[0];
            diff = pageX - this.state.og;
        } else {
            //vertical
            const { pageY } = e.targetTouches[0];
            diff = pageY - this.state.og;
        }

        this.setState({
            translate: diff,
        });
    }

    handleTouchEnd() {
        if (!this.state.touching || this.props.children.length <= 1) return;
        let { translate, currentIndex } = this.state;
        const max =
            this.props.direction === 'horizontal'
                ? this.state.wrapperWidth - this.state.containerWidth
                : this.state.wrapperHeight - this.state.containerHeight;
        const ogIndex = currentIndex;

        if (translate > 0) {
            //start
            translate = 0;
        } else if (translate < -max) {
            //end
            translate = -max;
        } else {
            //default case
            const diff = Math.abs(translate - this.state.ogTranslate);
            const isNext = translate - this.state.ogTranslate < 0;
            //console.log(translate - this.state.ogTranslate, diff, isNext)

            if (diff >= this.props.threshold) {
                if (isNext) {
                    //next slide
                    translate =
                        this.state.ogTranslate -
                        (this.props.direction === 'horizontal'
                            ? this.state.containerWidth
                            : this.state.containerHeight);
                    currentIndex += 1;
                } else {
                    //prev slide
                    translate =
                        this.state.ogTranslate +
                        (this.props.direction === 'horizontal'
                            ? this.state.containerWidth
                            : this.state.containerHeight);
                    currentIndex -= 1;
                }
            } else {
                //revert back
                translate = this.state.ogTranslate;
            }
        }

        this.setState(
            {
                touching: false,
                og: 0,
                touchId: -1,
                ogTranslate: 0,
                animating: true,
                translate,
                currentIndex,
            },
            () =>
                setTimeout(
                    () => this.setState({ animating: false }),
                    this.props.speed,
                ),
        );

        if (this.props.onChange) this.props.onChange(ogIndex, currentIndex);
    }

    renderPagination() {
        // @ts-ignore
        return this.props.children.map((child, i) => {
            const clx = classNames('react-weui-swiper__pagination-bullet', {
                active: i === this.state.currentIndex,
            });
            return <span className={clx} key={i} />;
        });
    }

    render() {
        const {
            className,
            children,
            height,
            width,
            direction,
            speed = 300,
            indicators,
            onClick,
        } = this.props;
        const clx = classNames('react-weui-swiper__container', className, {
            'react-weui-swiper__container-horizontal':
                direction === 'horizontal',
            'react-weui-swiper__container-vertical': direction === 'vertical',
        });

        const containerStyle = {
            height: height ? `${height}px` : '100%',
            width: width ? `${width}px` : '100%',
            touchAction: 'none',
        };

        const wrapperStyle = {
            width: this.state.wrapperWidth,
            height: this.state.wrapperHeight,
            transition: this.state.animating
                ? `transform .${speed / 100}s`
                : 'none',
            transform: `translate(${
                direction === 'horizontal' ? this.state.translate : 0
            }px, ${direction === 'vertical' ? this.state.translate : 0}px)`,
        };

        return (
            <div
                className={clx}
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
                style={containerStyle}
                onClick={onClick}
                ref={this.containerRef}
            >
                <div
                    className="react-weui-swiper__wrapper"
                    style={wrapperStyle}
                >
                    {children.map((child, i) => {
                        return React.cloneElement(child, {
                            className: classNames(
                                'react-weui-swiper__item',
                                child.className,
                            ),
                            key: i,
                            style: {
                                ...child.props.style,
                                ...{
                                    display:
                                        direction === 'horizontal'
                                            ? 'inline-block'
                                            : 'block',
                                    verticalAlign:
                                        direction === 'horizontal'
                                            ? 'top'
                                            : 'bottom',
                                    width: this.state.containerWidth,
                                    height: this.state.containerHeight,
                                },
                            },
                        });
                    })}
                </div>
                {indicators ? (
                    <div className="react-weui-swiper__pagination">
                        {this.renderPagination()}
                    </div>
                ) : (
                    false
                )}
            </div>
        );
    }
}

export default Swiper;
