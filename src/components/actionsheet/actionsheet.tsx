import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import Mask from '../mask/index';
import './actionsheet.less';

/**
 * Used to display a collection of actions that contain a set of interactivity, including descriptions, links, and so on. Popup from the bottom, generally used to respond to user clicks on the page.
 */
type Item = {
    label: string;
    className?: string;
    [key: string]: any;
};
interface ActionSheetProps {
    menus: Item[];
    actions: Item[];
    show: boolean;
    onRequestClose: React.TouchEventHandler;
    type: string;
}
interface DefaultProps
    extends Pick<ActionSheetProps, 'menus' | 'actions' | 'type' | 'show'> {}
class ActionSheet extends React.Component<ActionSheetProps> {
    static propTypes = {
        /**
         * Array of Objects for menus, `label` property is Required
         *
         */
        menus: PropTypes.array,
        /**
         * Array of Objects for actions, `label` property is Required
         *
         */
        actions: PropTypes.array,
        /**
         * To display ActionSheet
         *
         */
        show: PropTypes.bool,
        /**
         * Function triggers when user click on the mask
         *
         */
        onRequestClose: PropTypes.func,
        /**
         * style: ios/android
         */
        type: PropTypes.string,
    };

    static defaultProps: DefaultProps = {
        type: '',
        menus: [],
        actions: [],
        show: false,
    };

    constructor(props: Readonly<ActionSheetProps>) {
        super(props);

        this.handleMaskClick = this.handleMaskClick.bind(this);
    }

    handleMaskClick(e: React.TouchEvent) {
        if (this.props.onRequestClose) this.props.onRequestClose(e);
    }

    renderMenuItem() {
        return this.props.menus.map((menu) => {
            const { label, className = '', ...others } = menu;
            const cls = classNames({
                'weui-actionsheet__cell': true,
                [className]: className,
            });

            return (
                <div key={label} {...others} className={cls}>
                    {label}
                </div>
            );
        });
    }

    renderActions() {
        return this.props.actions.map((action) => {
            const { label, className = '', ...others } = action;
            const cls = classNames({
                'weui-actionsheet__cell': true,
                [className]: className,
            });

            return (
                <div key={label} {...others} className={cls}>
                    {label}
                </div>
            );
        });
    }

    render() {
        const {
            show,
            type,
            onRequestClose,
            menus,
            actions,
            ...others
        } = this.props;
        const cls = classNames({
            'weui-actionsheet': true,
            'weui-actionsheet_toggle': show,
        });

        const styleType = type || 'ios';

        return (
            <div className={styleType === 'android' ? 'weui-skin_android' : ''}>
                <Mask
                    style={{ display: show ? 'block' : 'none' }}
                    onClick={this.handleMaskClick}
                />
                <div className={cls} {...others}>
                    <div className="weui-actionsheet__menu">
                        {this.renderMenuItem()}
                    </div>
                    <div className="weui-actionsheet__action">
                        {this.renderActions()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionSheet;
