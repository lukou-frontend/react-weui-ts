import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

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
class Slider extends React.Component<SliderProps, SliderStates> {
    private BarRef = React.createRef<HTMLDivElement>();

    static propTypes = {
        /**
         * max value of the slider
         *
         */
        max: PropTypes.number,
        /**
         * min value of the slider
         *
         */
        min: PropTypes.number,
        /**
         * the offset between two number in the slider
         *
         */
        step: PropTypes.number,
        /**
         * display the value indicator
         *
         */
        showValue: PropTypes.bool,
        /**
         * whether input is disabled
         *
         */
        disabled: PropTypes.bool,
        /**
         * slider value when use as controll element
         *
         */
        value: PropTypes.number,
        /**
         * slider value when use as non-controll element, use with onChange
         *
         */
        defaultValue: PropTypes.number,
        /**
         * callback when slider value change, pass value and event instance
         *
         */
        onChange: PropTypes.func,
        /**
         * callback when slider value change, pass value and event instance
         *
         */
        snapToValue: PropTypes.bool,
    };

    static defaultProps = {
        max: 100 as SliderProps['max'],
        min: 0 as SliderProps['min'],
        step: 1 as SliderProps['step'],
        showValue: true as SliderProps['showValue'],
        disabled: false as SliderProps['disabled'],
        defaultValue: 0 as SliderProps['defaultValue'],
        snapToValue: true as SliderProps['snapToValue'],
    };

    constructor(props: SliderProps) {
        super(props);
        const { value, defaultValue, max, min } = props;
        this.state = {
            value: value || defaultValue || 0,
            controlled: typeof value !== 'undefined',
            totalWidth: 0,
            touching: false,
            ogX: 0,
            touchId: undefined,
            percent: value
                ? (value / (max - min)) * 100
                : defaultValue
                ? (defaultValue / (max - min)) * 100
                : 0,
            animating: false,
        };

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    componentDidMount() {
        if (this.state.value === 0) this.updateValue();
    }

    UNSAFE_componentWillReceiveProps(nextProps: SliderProps) {
        if (this.state.controlled) {
            if (
                nextProps.value <= this.props.max &&
                nextProps.value >= this.props.min
            ) {
                const percent =
                    (nextProps.value / (this.props.max - this.props.min)) * 100;
                this.setState({ value: nextProps.value, percent });
            }
        }
    }

    updateValue(snap = false) {
        let value = 0;
        const { percent } = this.state;
        const { min, max, step, onChange } = this.props;
        const steps = (max - min) / step;
        const perPercent = 100 / steps;

        if (percent === 100) {
            value = max;
        } else if (percent === 0) {
            value = min;
        } else {
            for (let i = 0; i < steps; i += 1) {
                //over 50 margin than next
                if (
                    percent > i * perPercent &&
                    percent <= (i + 1) * perPercent
                ) {
                    value =
                        percent - i * perPercent > perPercent / 2
                            ? (i + 1) * step + min
                            : i * step + min;
                }
            }
        }

        if (value !== this.state.value) {
            this.setState({ value });
            if (onChange) onChange(value);
        }

        if (snap) {
            this.setState(
                {
                    percent:
                        value === min
                            ? 0
                            : value === max
                            ? 100
                            : ((value - min) / step) * perPercent,
                    animating: true,
                },
                () => this.setState({ animating: false }),
            );
        }
    }

    handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
        if (this.state.touching || this.props.disabled) return;
        this.setState((prevState) => ({
            touching: true,
            touchId: e.targetTouches[0].identifier,
            totalWidth: this.BarRef.current!.clientWidth,
            ogX: e.targetTouches[0].pageX,
            ogPercent: prevState.percent,
        }));
    }

    handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
        if (!this.state.touching || this.props.disabled) return;
        if (e.targetTouches[0].identifier !== this.state.touchId) return;
        if (typeof this.state.ogPercent === 'undefined') return;
        const { pageX } = e.targetTouches[0];
        const diffX = pageX - this.state.ogX;
        this.setState(
            (prevState) => {
                let percent =
                    (diffX / prevState.totalWidth) * 100 + prevState.ogPercent!;
                percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
                return {
                    percent,
                };
            },
            () => this.updateValue(),
        );
    }

    handleTouchEnd() {
        if (!this.state.touching || this.props.disabled) return;

        if (this.props.snapToValue) {
            this.updateValue(true);
        }

        this.setState({
            touching: false,
            ogX: 0,
            touchId: undefined,
            ogPercent: 0,
        });
    }

    render() {
        const {
            className,
            max,
            min,
            step,
            showValue,
            value,
            disabled,
            defaultValue,
            onChange,
            snapToValue,
            ...domProps
        } = this.props;

        const cls = classNames('weui-slider-box', className);

        const trackStyles = {
            width: `${this.state.percent}%`,
        };

        const handlerStyles = {
            left: `${this.state.percent}%`,
            transition: this.state.animating ? 'transform .3s' : 'none',
            touchAction: 'none',
        };

        return (
            <div className={cls}>
                <div className="weui-slider" {...domProps}>
                    <div className="weui-slider__inner" ref={this.BarRef}>
                        <div
                            style={trackStyles}
                            className="weui-slider__track"
                        />
                        <div
                            style={handlerStyles}
                            onTouchStart={this.handleTouchStart}
                            onTouchMove={this.handleTouchMove}
                            onTouchEnd={this.handleTouchEnd}
                            className="weui-slider__handler"
                        />
                    </div>
                </div>
                {showValue ? (
                    <div className="weui-slider-box__value">
                        {this.state.value}
                    </div>
                ) : (
                    false
                )}
            </div>
        );
    }
}

export default Slider;
