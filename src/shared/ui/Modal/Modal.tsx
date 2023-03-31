import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';

import type { PropsWithChildren, ReactNode } from 'react';

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { className, children, isOpen, onClose } = props;

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen
  };

  return (
    <div className={classNames(styles.Modal, mods, [className])}>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};
