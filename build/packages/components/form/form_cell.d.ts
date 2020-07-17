import * as React from 'react';
import PropTypes from 'prop-types';
import './touch_fix.less';
/**
 * form wrapper for `Cell`
 *
 */
interface FormCellProps {
    checkbox?: boolean;
    radio?: boolean;
    select?: boolean;
    selectPos?: 'before' | 'after';
    switch?: boolean;
    vcode?: boolean;
    warn?: boolean;
    className?: any;
    children?: React.ReactNode;
}
export default class FormCell extends React.Component<FormCellProps> {
    static propTypes: {
        /**
         * if cell use for vcode
         *
         */
        vcode: PropTypes.Requireable<boolean>;
        /**
         * display warn style of cell
         *
         */
        warn: PropTypes.Requireable<boolean>;
        /**
         * if cell use for radio
         *
         */
        radio: PropTypes.Requireable<boolean>;
        /**
         * if cell use for checkbox
         *
         */
        checkbox: PropTypes.Requireable<boolean>;
        /**
         * if cell use for switch checkbox
         *
         */
        switch: PropTypes.Requireable<boolean>;
        /**
         * if cell use for select
         *
         */
        select: PropTypes.Requireable<boolean>;
        /**
         * select position, options: before, after
         *
         */
        selectPos: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        vcode: boolean | undefined;
        warn: boolean | undefined;
        radio: boolean | undefined;
        checkbox: boolean | undefined;
        select: boolean | undefined;
        switch: boolean | undefined;
        selectPos: "after" | "before" | undefined;
    };
    render(): JSX.Element;
}
export {};
