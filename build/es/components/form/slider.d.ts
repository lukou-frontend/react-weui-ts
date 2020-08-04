import * as React from 'react';
import PropTypes from 'prop-types';
/**
 *  A Slider is an element used to set a value, good choice when users think it as relative quantity rather than value
 *
 */
interface SliderProps {
    defaultValue?: number;
    disabled?: boolean;
    max: number;
    min: number;
    onChange?: (value: number) => void;
    showValue?: boolean;
    snapToValue?: boolean;
    step: number;
    value: number;
    className?: any;
    children?: React.ReactNode;
}
interface SliderStates {
    value: number;
    controlled: boolean;
    totalWidth: number;
    touching: boolean;
    ogX: number;
    touchId: any;
    percent: number;
    animating: boolean;
    ogPercent?: number;
}
declare class Slider extends React.Component<SliderProps, SliderStates> {
    static propTypes: {
        /**
         * max value of the slider
         *
         */
        max: PropTypes.Requireable<number>;
        /**
         * min value of the slider
         *
         */
        min: PropTypes.Requireable<number>;
        /**
         * the offset between two number in the slider
         *
         */
        step: PropTypes.Requireable<number>;
        /**
         * display the value indicator
         *
         */
        showValue: PropTypes.Requireable<boolean>;
        /**
         * whether input is disabled
         *
         */
        disabled: PropTypes.Requireable<boolean>;
        /**
         * slider value when use as controll element
         *
         */
        value: PropTypes.Requireable<number>;
        /**
         * slider value when use as non-controll element, use with onChange
         *
         */
        defaultValue: PropTypes.Requireable<number>;
        /**
         * callback when slider value change, pass value and event instance
         *
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * callback when slider value change, pass value and event instance
         *
         */
        snapToValue: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        max: number;
        min: number;
        step: number;
        showValue: boolean | undefined;
        disabled: boolean | undefined;
        defaultValue: number | undefined;
        snapToValue: boolean | undefined;
    };
    constructor(props: SliderProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: SliderProps): void;
    updateValue(snap?: boolean): void;
    handleTouchStart(e: React.TouchEvent<HTMLDivElement>): void;
    handleTouchMove(e: React.TouchEvent<HTMLDivElement>): void;
    handleTouchEnd(): void;
    render(): JSX.Element;
}
export default Slider;
