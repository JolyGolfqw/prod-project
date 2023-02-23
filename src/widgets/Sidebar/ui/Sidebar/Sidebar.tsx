import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { type PropsWithChildren, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => setCollapsed(prev => !prev);
  return (
    <div data-testid='sidebar' className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <Button data-testid='sidebar-toggle'
        className={styles.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.XL}
        onClick={onToggle}>{collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={styles.item}>
          <MainIcon className={styles.icon}/>
          <span className={styles.link}>{t("Главная")}</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={styles.item}>
          <AboutIcon className={styles.icon}/>
          <span className={styles.link}>{t('О нас')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher short={collapsed} className={styles.lang}/>
      </div>
    </div>
  );
};
