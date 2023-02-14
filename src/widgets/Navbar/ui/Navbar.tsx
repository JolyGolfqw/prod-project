import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';

import type { PropsWithChildren } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string
}

export const Navbar = (props: PropsWithChildren<NavbarProps>) => {
  const { className } = props;

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={styles.mainLink}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>О нас</AppLink>
      </div>
    </div>
  );
};
