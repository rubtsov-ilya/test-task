import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import classNames from 'classnames';

import { Media } from '@/providers/media-provider';

import styles from './Burger.module.scss';

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
      <Media greaterThan={'phone'}>{children || 'МЕНЮ'}</Media>
    </button>
  );
};
