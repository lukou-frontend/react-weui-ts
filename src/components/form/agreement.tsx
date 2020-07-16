import * as React from 'react';
import classNames from '../../utils/classnames';

/**
 * Agreement style checkbox
 *
 */
interface AgreementProps {
  className?: any,
  id?: string,
  children?: React.ReactNode
}
const Agreement = (props: AgreementProps) => {
    const { className, children, id, ...others } = props;
    const cls = classNames({
        'weui-agree': true,
        [className]: className
    });

    return (
        <label className={cls} htmlFor={id}>
            <input id={id} type="checkbox" className="weui-agree__checkbox" {...others}/>
            <span className="weui-agree__text">
                {children}
            </span>
        </label>
    );
};

export default Agreement;