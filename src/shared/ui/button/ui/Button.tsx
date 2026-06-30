import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={classNames(
        styles['button'],
        className,
      )}
    >
      {children}
    </button>
  );
};
