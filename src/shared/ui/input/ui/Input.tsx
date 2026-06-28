import { FC, ReactNode, ComponentProps } from 'react';

import styles from './Input.module.scss';
import classNames from 'classnames';

type AccentSpanProps = ComponentProps<'span'> & {
  className?: string;
  children: ReactNode;
  fontWeight?: 'w-800' | 'w-700' | 'w-600' | 'w-500' | 'w-400';
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
};

export const Input: FC<AccentSpanProps> = ({
  className,
  children,
  fontWeight,
  color = 'primary',
}) => {
  return (
    <span
      className={classNames(
        styles['accent-span'],
        styles[color],
        fontWeight && styles[fontWeight],
        className,
      )}
    >
      {children}
    </span>
  );
};
