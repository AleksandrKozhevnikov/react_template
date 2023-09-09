import React, { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/ClassNames';
import styles from './AppLink.module.scss'
import { LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    DEFAULT = 'default',
    DARK = 'dark'
}

interface AppLinkProps extends LinkProps, PropsWithChildren {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({className, children, to, theme = AppLinkTheme.DEFAULT, ...otherProps}) => {
    
    return (
            <Link 
                to={to}
                className={classNames(styles.appLink, {}, [className, styles[theme]])} 
                {...otherProps}
            >
                {children}
            </Link>
    );
};