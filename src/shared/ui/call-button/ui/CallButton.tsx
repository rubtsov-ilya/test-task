'use client';

import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import styles from './CallButton.module.scss';

interface CallButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: string;
}

export const CallButton: FC<CallButtonProps> = ({
  className,
  children = 'Заказать звонок',
  ...otherProps
}) => {
  const text = String(children);
  return (
    <button
      {...otherProps}
      className={classNames(styles['call-button'], className)}
    >
      <span data-text={text}>{children}</span>
    </button>
  );
};
