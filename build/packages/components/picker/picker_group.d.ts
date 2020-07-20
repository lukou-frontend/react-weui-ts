import * as React from 'react';
import PropTypes from 'prop-types';
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
    mapKeys?: any;
}
interface PickerGroupStates {
    touching: boolean;
    ogY: number;
    ogTranslate: number;
    touchId: any;
    translate: number;
    totalHeight: number;
    selected: number;
    animating: boolean | undefined;
}
declare class PickerGroup extends React.Component<PickerGroupProps, PickerGroupStates> {
    static propTypes: {
        height: PropTypes.Requireable<number>;
        itemHeight: PropTypes.Requireable<number>;
        indicatorTop: PropTypes.Requireable<number>;
        indicatorHeight: PropTypes.Requireable<number>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        aniamtion: PropTypes.Requireable<boolean>;
        groupIndex: PropTypes.Requireable<number>;
        defaultIndex: PropTypes.Requireable<number>;
    };
    static defaultProps: {
        height: number;
        itemHeight: number;
        indicatorTop: number;
        indicatorHeight: number;
        aniamtion: boolean | undefined;
        groupIndex: number;
        defaultIndex: number;
        mapKeys: {
            label: string;
        };
    };
    constructor(props: PickerGroupProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: PickerGroupProps): void;
    adjustPosition(props: PickerGroupProps): void;
    updateSelected(propagate?: boolean): void;
    handleTouchStart(e: React.TouchEvent): void;
    handleTouchMove(e: React.TouchEvent): void;
    handleTouchEnd(): void;
    render(): JSX.Element;
}
export default PickerGroup;
