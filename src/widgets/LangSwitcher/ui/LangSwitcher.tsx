import { classNames } from 'shared/lib/classNames/classNames';
import type { PropsWithChildren } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: PropsWithChildren<LangSwitcherProps>) => {
  const { t, i18n } = useTranslation();

  const toggle = (): any => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  return (
    <Button
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};
