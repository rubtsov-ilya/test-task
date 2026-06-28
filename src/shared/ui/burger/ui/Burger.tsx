import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import styles from './Burger.module.scss';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

export const Burger: FC<ButtonProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <button {...otherProps} className={classNames(styles['burger'], className)}>
      <div className={styles['wrapper']}>
        <div className={styles['item']} />
        <div className={styles['item']} />
        <div className={styles['item']} />
      </div>
      {children || "МЕНЮ"}
    </button>
  );
};
