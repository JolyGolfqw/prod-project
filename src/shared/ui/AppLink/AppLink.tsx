import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";

import type { PropsWithChildren } from "react";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

export const AppLink = (props: PropsWithChildren<AppLinkProps>) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])}>
      {children}
    </Link>
  );
};
