import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl"

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props: PropsWithChildren<ButtonProps>) => {
  const { className, children, theme, square, size = ButtonSize.L, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [styles.square]: square,
    [styles[size]]: true
  };

  console.log(styles);

  return (
    <button className={classNames(styles.Button, mods, [className, styles[theme]])} {...otherProps}>
      {children}
    </button>
  );
};
