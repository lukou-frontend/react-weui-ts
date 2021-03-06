import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

interface PickerGroupProps {
    height: number;
    itemHeight: number;
    indicatorTop: number;
    indicatorHeight: number;
    onChange: (item?: any, selected?: number, groupIndex?: number) => void;
    animation?: boolean;
    groupIndex: number;
    defaultIndex: number;
    aniamtion: boolean;
    className?: any;
    items?: any;
    mapKeys?: {
        label: string;
    };
}
interface PickerGroupStates {
    touching: boolean;
    ogY: number;
    ogTranslate: number;
    touchId: any;
    translate: number;
    totalHeight: number;
    animating: boolean | undefined;
}
class PickerGroup extends React.Component<PickerGroupProps, PickerGroupStates> {
    static propTypes = {
        height: PropTypes.number,
        itemHeight: PropTypes.number,
        indicatorTop: PropTypes.number,
        indicatorHeight: PropTypes.number,
        onChange: PropTypes.func,
        aniamtion: PropTypes.bool,
        groupIndex: PropTypes.number,
        defaultIndex: PropTypes.number,
        mapKeys: PropTypes.object,
    };

    static defaultProps = {
        height: 238 as PickerGroupProps['height'],
        itemHeight: (25 + 9) as PickerGroupProps['itemHeight'], //content + padding
        indicatorTop: 102 as PickerGroupProps['indicatorHeight'],
        indicatorHeight: 34 as PickerGroupProps['indicatorHeight'],
        aniamtion: true as PickerGroupProps['animation'],
        groupIndex: -1 as PickerGroupProps['groupIndex'],
        defaultIndex: -1 as PickerGroupProps['defaultIndex'],
        mapKeys: {
            label: 'label',
        },
    };

    constructor(props: PickerGroupProps) {
        super(props);

        this.state = {
            touching: false,
            ogY: 0,
            ogTranslate: 0,
            touchId: undefined,
            translate: 0,
            totalHeight: 0,
            animating: this.props.animation,
        };

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.updateSelected = this.updateSelected.bind(this);
    }

    componentDidMount() {
        this.adjustPosition(this.props);
    }

    UNSAFE_componentWillReceiveProps(nextProps: PickerGroupProps) {
        this.adjustPosition(nextProps);
    }

    adjustPosition(props: PickerGroupProps) {
        const { items, itemHeight, indicatorTop, defaultIndex } = props;
        const totalHeight = items.length * itemHeight;
        let translate = totalHeight <= indicatorTop ? indicatorTop : 0;

        if (defaultIndex > -1) {
            if (translate === 0) {
                const upperCount = Math.floor(indicatorTop / itemHeight);
                if (defaultIndex > upperCount) {
                    //over
                    const overCount = defaultIndex - upperCount;
                    translate -= overCount * itemHeight;
                } else if (defaultIndex === upperCount) {
                    translate = 0;
                } else {
                    //less
                    translate +=
                        Math.abs(upperCount - defaultIndex) * itemHeight;
                }
                //if(props.groupIndex == 2) console.log(defaultIndex,translate, upperCount)
            } else {
                //total item less than indicator height
                translate -= itemHeight * defaultIndex;
            }
        }

        this.setState({ ogTranslate: translate, totalHeight, translate }, () =>
            defaultIndex > -1
                ? this.updateSelected(false)
                : this.updateSelected(),
        );
    }

    updateSelected(propagate = true) {
        const {
            items,
            itemHeight,
            indicatorTop,
            indicatorHeight,
            onChange,
            groupIndex,
        } = this.props;
        let selected = 0;
        items.forEach((item: { disabled: any }, i: number) => {
            //console.log(i, this.state.translate, (this.state.translate + (itemHeight * i)), indicatorTop, this.state.translate + (itemHeight * i) + itemHeight , indicatorTop + indicatorHeight)
            if (
                !item.disabled &&
                this.state.translate + itemHeight * i >= indicatorTop &&
                this.state.translate + itemHeight * i + itemHeight <=
                    indicatorTop + indicatorHeight
            ) {
                selected = i;
            }
        });

        if (onChange && propagate)
            onChange(items[selected], selected, groupIndex);
    }

    handleTouchStart(e: React.TouchEvent) {
        e.stopPropagation();
        if (this.state.touching || this.props.items.length <= 1) return;
        this.setState((prevState) => ({
            touching: true,
            ogTranslate: prevState.translate,
            touchId: e.targetTouches[0].identifier,
            ogY:
                prevState.translate === 0
                    ? e.targetTouches[0].pageY
                    : e.targetTouches[0].pageY - prevState.translate,
            animating: false,
        }));
    }

    handleTouchMove(e: React.TouchEvent) {
        e.stopPropagation();
        if (!this.state.touching || this.props.items.length <= 1) return;
        if (e.targetTouches[0].identifier !== this.state.touchId) return;

        const { pageY } = e.targetTouches[0];
        this.setState((prevState) => ({
            translate: pageY - prevState.ogY,
        }));
    }

    handleTouchEnd() {
        if (!this.state.touching || this.props.items.length <= 1) return;

        const { indicatorTop, indicatorHeight, itemHeight } = this.props;
        let { translate } = this.state;

        if (Math.abs(translate - this.state.ogTranslate) < itemHeight * 0.51) {
            translate = this.state.ogTranslate;
        } else if (translate > indicatorTop) {
            //top boundry
            translate = indicatorTop;
        } else if (
            translate + this.state.totalHeight <
            indicatorTop + indicatorHeight
        ) {
            //bottom
            translate = indicatorTop + indicatorHeight - this.state.totalHeight;
        } else {
            //pass single item range but not exceed boundry
            let step = 0;
            let adjust = 0;
            const diff = (translate - this.state.ogTranslate) / itemHeight;

            if (Math.abs(diff) < 1) {
                step = diff > 0 ? 1 : -1;
            } else {
                adjust = Math.abs((diff % 1) * 100) > 50 ? 1 : 0;
                step =
                    diff > 0
                        ? Math.floor(diff) + adjust
                        : Math.ceil(diff) - adjust;
            }

            translate = this.state.ogTranslate + step * itemHeight;
        }

        this.setState(
            {
                touching: false,
                ogY: 0,
                touchId: undefined,
                ogTranslate: 0,
                animating: true,
                translate,
            },
            () => this.updateSelected(),
        );
    }

    render() {
        const {
            items,
            className,
            height,
            itemHeight,
            indicatorTop,
            indicatorHeight,
            onChange,
            aniamtion,
            groupIndex,
            defaultIndex,
            mapKeys,
            ...others
        } = this.props;
        const cls = classNames('weui-picker__group', className);
        const styles = {
            transform: `translate(0, ${this.state.translate}px)`,
            transition: this.state.animating ? 'transform .3s' : 'none',
        };

        return (
            <div
                style={{ touchAction: 'none' }}
                className={cls}
                {...others}
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
            >
                <div className="weui-picker__mask" />
                <div className="weui-picker__indicator" />
                <div className="weui-picker__content" style={styles}>
                    {items.map(
                        (
                            item: { [x: string]: any; disabled: any },
                            j: string | number | undefined,
                        ) => {
                            const label = item[this.props.mapKeys!.label];
                            const itemCls = classNames('weui-picker__item', {
                                'weui-picker__item_disabled': item.disabled,
                            });

                            return (
                                <div key={j} className={itemCls}>
                                    {label}
                                </div>
                            );
                        },
                    )}
                </div>
            </div>
        );
    }
}

export default PickerGroup;
