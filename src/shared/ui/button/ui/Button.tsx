import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  modifier?: 'with-icon';
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  modifier,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={classNames(
        styles['button'],
        modifier && styles[modifier],
        className,
      )}
    >
      {children}
    </button>
  );
};
