import React, { FC } from 'react';

import classNames from 'classnames';

import styles from './SectionContainer.module.scss';

type SectionModifier = 'full-height' | 'no-padding' | 'max-width-unset';

interface SectionContainerProps {
  children: React.ReactNode;
  modifiers?: SectionModifier[];
  className?: string;
}

export const SectionContainer: FC<SectionContainerProps> = ({
  children,
  modifiers = [],
  className,
}) => {
  return (
    <div
      className={classNames(
        styles['section-container'],
        ...modifiers.map((mod) => styles[mod]),
        className,
      )}
    >
      {children}
    </div>
  );
};
