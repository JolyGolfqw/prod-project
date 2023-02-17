import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { type PropsWithChildren, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

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
      <button data-testid='sidebar-toggle' onClick={onToggle}>{t("Toggle")}</button>
      <div className={styles.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={styles.lang}/>
      </div>
    </div>
  );
};
