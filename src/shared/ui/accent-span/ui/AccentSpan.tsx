import { FC, ReactNode, HTMLAttributes } from 'react';

import styles from './AccentSpan.module.scss';
import classNames from 'classnames';

interface AccentSpanProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children: ReactNode;
  fontWeight?: 'w-800' | 'w-700' | 'w-600' | 'w-500' | 'w-400';
  uppercase?: boolean;
  underline?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
}

export const AccentSpan: FC<AccentSpanProps> = ({
  className,
  children,
  fontWeight = 'w-400',
  uppercase = false,
  underline = false,
  color = 'primary',
  ...otherProps
}) => {
  return (
    <span
      {...otherProps}
      className={classNames(
        styles['accent-span'],
        styles[color],
        uppercase && styles['uppercase'],
        underline && styles['underline'],
        fontWeight && styles[fontWeight],
        className,
      )}
    >
      {children}
    </span>
  );
};
