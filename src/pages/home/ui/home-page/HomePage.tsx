import { FC } from 'react';

import styles from './HomePage.module.scss';
import type { Metadata } from 'next';
import { InchapinSection } from '@/pages/home/ui/inchapin-section/InchapinSection.tsx';
import { AboutSection } from '@/pages/home/ui/about-section/AboutSection.tsx';

interface HomePageProps {}

export const metadata: Metadata = {
  title: 'My Home Title',
  description: 'My Home Description',
};

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className={styles['home-page']}>
      <main>
        <InchapinSection />
        <AboutSection />
      </main>
    </div>
  );
};
