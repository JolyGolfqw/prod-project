import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import type { PropsWithChildren } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = (props: PropsWithChildren<ThemeSwitcherProps>) => {
  const { theme, onToggle } = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={onToggle}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
