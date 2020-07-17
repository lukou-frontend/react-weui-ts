import * as React from 'react'
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './touch_fix.less';

/**
 * form wrapper for `Cell`
 *
 */
interface FormCellProps {
  checkbox?: boolean,
  radio?: boolean,
  select?: boolean,
  selectPos?: 'before' | 'after',
  switch?: boolean,
  vcode?: boolean,
  warn?: boolean,
  className?: any,
  children?: React.ReactNode
}
export default class FormCell extends React.Component<FormCellProps> {
    static propTypes = {
        /**
         * if cell use for vcode
         *
         */
        vcode: PropTypes.bool,
        /**
         * display warn style of cell
         *
         */
        warn: PropTypes.bool,
        /**
         * if cell use for radio
         *
         */
        radio: PropTypes.bool,
        /**
         * if cell use for checkbox
         *
         */
        checkbox: PropTypes.bool,
        /**
         * if cell use for switch checkbox
         *
         */
        'switch': PropTypes.bool,
        /**
         * if cell use for select
         *
         */
        select: PropTypes.bool,
        /**
         * select position, options: before, after
         *
         */
        selectPos: PropTypes.string,
    };

    static defaultProps = {
        vcode: false as FormCellProps['vcode'],
        warn: false as FormCellProps['warn'],
        radio: false as FormCellProps['radio'],
        checkbox: false as FormCellProps['checkbox'],
        select: false as FormCellProps['select'],
        switch: false as FormCellProps['switch'],
        selectPos: undefined as FormCellProps['selectPos']
    };

    render() {
        const {
          className, children,
          radio, checkbox, vcode, warn,
          select, selectPos,
          ...others
        } = this.props;
        const cellDomProps = Object.assign({}, others);
        delete cellDomProps.switch;
        const cls = classNames({
            'weui-cell': true,
            'weui-cell_vcode': vcode,
            'weui-cell_warn': warn,
            'weui-cell_switch': this.props.switch,
            'weui-cell_select': select,
            'weui-cell_select-before': selectPos === 'before',
            'weui-cell_select-after': selectPos === 'after',
            'weui-check__label': radio || checkbox,
            [className]: className
        });

        if (radio || checkbox) {
            return (
                <label className={cls} {...cellDomProps}>{children}</label>
            );
        } else {
            return (
                <div className={cls} {...cellDomProps}>{children}</div>
            );
        }
    }
};
