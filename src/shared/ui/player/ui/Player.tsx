import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Player.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { VideoOverlayIcon } from '@/shared/assets/icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  src?: string;
}

export const Player: FC<ButtonProps> = ({ className, src, ...otherProps }) => {
  return (
    <button {...otherProps} className={classNames(styles['player'], className)}>
      <Image
        fill
        className={styles['image']}
        src={src || '/images/foreground/player.jpg'}
        alt={'image'}
      />
      <VideoOverlayIcon className={styles['overlay-icon']} />
    </button>
  );
};
