import { ButtonHTMLAttributes, FC } from 'react';

import classNames from 'classnames';

import { PhoneIcon } from '@/shared/assets/icons';

import styles from './PhoneButton.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const PhoneButton: FC<ButtonProps> = ({ className, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={classNames(styles['phone-button'], className)}
    >
      <PhoneIcon className={styles['phone-icon']} />
    </button>
  );
};
