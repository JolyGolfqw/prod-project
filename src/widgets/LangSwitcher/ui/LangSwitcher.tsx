import { classNames } from 'shared/lib/classNames/classNames';
import type { PropsWithChildren } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = ({ className, short }: PropsWithChildren<LangSwitcherProps>) => {
  const { t, i18n } = useTranslation();

  const toggle = (): any => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  return (
    <Button
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};
