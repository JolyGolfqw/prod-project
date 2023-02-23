import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import type { PropsWithChildren } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string
}

export const Navbar = (props: PropsWithChildren<NavbarProps>) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>/</div>
    </div>
  );
};
