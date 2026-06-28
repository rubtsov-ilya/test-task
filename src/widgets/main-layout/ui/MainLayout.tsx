import { FC, ReactNode } from 'react';
import { MainHeader } from '@/widgets/main-header';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};
