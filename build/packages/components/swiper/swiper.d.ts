import * as React from 'react';
import PropTypes from 'prop-types';
import { ClassValue } from '../../utils/classnames';
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
    children: SwiperChildren[];
}
interface SwiperState {
    containerWidth: number;
    containerHeight: number;
    currentIndex: number;
    touching: boolean;
    og: number;
    ogTranslate: number;
    touchId: number;
    translate: number;
    animating: boolean;
    wrapperWidth: number;
    wrapperHeight: number;
}
declare class Swiper extends React.Component<SwiperProps, SwiperState> {
    static propTypes: {
        /**
         * height for the container, number in px
         *
         */
        height: PropTypes.Requireable<number>;
        /**
         * width for the container, number in px
         *
         */
        width: PropTypes.Requireable<number>;
        /**
         * threshold for the swiper, number in px
         *
         */
        threshold: PropTypes.Requireable<number>;
        /**
         * speed for the slide transition, number in ms
         *
         */
        speed: PropTypes.Requireable<number>;
        /**
         * default slider index
         *
         */
        defaultIndex: PropTypes.Requireable<number>;
        /**
         * direction of swiper
         *
         */
        direction: PropTypes.Requireable<string>;
        /**
         * show indicators
         *
         */
        indicators: PropTypes.Requireable<boolean>;
        /**
         * callback when slide change is trigger, pass indexs of (prev, next)
         *
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        height: null;
        width: null;
        defaultIndex: number;
        direction: string;
        threshold: number;
        speed: number;
        indicators: boolean;
    };
    constructor(props: SwiperProps);
    componentDidMount(): void;
    handleTouchStart(e: React.TouchEvent<HTMLDivElement>): void;
    handleTouchMove(e: React.TouchEvent<HTMLDivElement>): void;
    handleTouchEnd(): void;
    renderPagination(): JSX.Element[];
    render(): JSX.Element;
}
export default Swiper;
