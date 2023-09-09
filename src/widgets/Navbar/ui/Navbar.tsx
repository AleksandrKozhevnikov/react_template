import React from 'react';
import { classNames } from 'shared/lib/ClassNames';
import styles from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.navbar)}>
            <div className={styles.links_wrapper}>
                <AppLink theme={AppLinkTheme.DEFAULT} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.DEFAULT} to={'/about'}>asd</AppLink>
            </div>
        </div>
    );
};