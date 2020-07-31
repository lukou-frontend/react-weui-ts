import * as React from 'react';

interface PageProps {
  title?: string,
  subTitle?: string,
  spacing?: boolean,
  className?: any,
  children?: React.ReactNode,
  footer?: any
}
export default class Page extends React.Component<PageProps> {
    render() {
        const {title, subTitle, spacing, className, children, footer} = this.props;

        return (
            <section className={`page ${className}`}>
                <div className="page__hd">
                    <h1 className="page__title">{title}</h1>
                    <p className="page__desc">{subTitle}</p>
                </div>
                <div className={`page__bd ${spacing ? 'page__bd_spacing' : ''}`}>
                    {children}
                </div>
                { footer ?
                <div className="page__ft">
                    {footer}
                </div> : false }
            </section>
        );
    }
};
