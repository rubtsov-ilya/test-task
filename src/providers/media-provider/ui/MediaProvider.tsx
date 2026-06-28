'use client';

import { FC, ReactNode } from 'react';

import { createMedia } from '@artsy/fresnel';

const AppMedia = createMedia({
  breakpoints: {
    null: 0,
    phone: 361,
    tabletSmall: 769,
    tablet: 1025,
  },
});

export const mediaStyles = AppMedia.createMediaStyle();

export const Media = AppMedia.Media;

interface MediaProviderProps {
  children: ReactNode;
}

export const MediaProvider: FC<MediaProviderProps> = ({ children }) => {
  return (
    <AppMedia.MediaContextProvider>{children}</AppMedia.MediaContextProvider>
  );
};
