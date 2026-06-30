'use client';

import { FC, ReactNode } from 'react';
import { MainHeader } from '@/widgets/main-header';
import { SmoothScroll } from '@/shared/ui/smooth-scroll';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <SmoothScroll>{children}</SmoothScroll>
    </>
  );
};
