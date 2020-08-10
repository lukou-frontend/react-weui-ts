import * as React from 'react';

interface PageProps {
    title?: React.ReactChild;
    subTitle?: string;
    spacing?: boolean;
    className?: any;
    children?: React.ReactNode;
    footer?: React.ReactChild;
}
export default function Page(props: PageProps) {
    const { title, subTitle, spacing, className, children, footer } = props;

    return (
        <section className={`page ${className}`}>
            <div className="page__hd">
                <h1 className="page__title">{title}</h1>
                <p className="page__desc">{subTitle}</p>
            </div>
            <div className={`page__bd ${spacing ? 'page__bd_spacing' : ''}`}>
                {children}
            </div>
            {footer ? <div className="page__ft">{footer}</div> : false}
        </section>
    );
}
