'use client';

import {
  ButtonHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import styles from './Player.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { VideoOverlayIcon } from '@/shared/assets/icons';

export interface PlayerRef {
  play: () => void;
}

interface PlayerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  src?: string;
  videoSrc?: string;
}

export const Player = forwardRef<PlayerRef, PlayerProps>(
  ({ className, src, videoSrc, ...otherProps }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const scrollYRef = useRef(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const play = () => {
      const video = videoRef.current;
      if (video) {
        scrollYRef.current =
          window.scrollY ||
          window.pageYOffset ||
          document.documentElement.scrollTop;

        if (
          document.activeElement &&
          typeof (document.activeElement as any).blur === 'function'
        ) {
          (document.activeElement as any).blur();
        }

        video.play().catch((err) => {
          console.error('Video playback failed:', err);
        });

        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if ((video as any).webkitRequestFullscreen) {
          (video as any).webkitRequestFullscreen();
        } else if ((video as any).mozRequestFullScreen) {
          (video as any).mozRequestFullScreen();
        } else if ((video as any).msRequestFullscreen) {
          (video as any).msRequestFullscreen();
        }
      }
    };

    useImperativeHandle(ref, () => ({
      play,
    }));

    useEffect(() => {
      const handleFullscreenChange = () => {
        const isFullscreen =
          document.fullscreenElement === videoRef.current ||
          (document as any).webkitFullscreenElement === videoRef.current ||
          (document as any).mozFullScreenElement === videoRef.current ||
          (document as any).msFullscreenElement === videoRef.current;

        if (!isFullscreen && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;

          window.scrollTo(0, scrollYRef.current);

          setTimeout(() => {
            videoRef.current?.blur();
            if (
              document.activeElement &&
              typeof (document.activeElement as any).blur === 'function'
            ) {
              (document.activeElement as any).blur();
            }
            window.scrollTo(0, scrollYRef.current);
          }, 50);
        }
      };

      document.addEventListener('fullscreenchange', handleFullscreenChange);
      document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.addEventListener('mozfullscreenchange', handleFullscreenChange);
      document.addEventListener('MSFullscreenChange', handleFullscreenChange);

      return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
        document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
        document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
      };
    }, []);

    return (
      <>
        <button
          {...otherProps}
          onClick={(e) => {
            e.stopPropagation();
            play();
            if (otherProps.onClick) {
              otherProps.onClick(e);
            }
          }}
          className={classNames(styles['player'], className)}
        >
          <Image
            fill
            className={styles['image']}
            src={src || '/images/foreground/player.jpg'}
            alt={'image'}
          />
          <VideoOverlayIcon className={styles['overlay-icon']} />
        </button>
        {isMounted &&
          videoSrc &&
          typeof document !== 'undefined' &&
          createPortal(
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              playsInline
              className={styles['hidden-video']}
            />,
            document.body,
          )}
      </>
    );
  }
);

Player.displayName = 'Player';
