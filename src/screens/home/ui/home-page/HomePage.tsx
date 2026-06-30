import { FC } from 'react';

import { InchapinSection } from '@/screens/home/ui/inchapin-section/InchapinSection.tsx';

import { AboutSection } from '@/screens/home/ui/about-section/AboutSection.tsx';

import styles from './HomePage.module.scss';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Home Title',
  description: 'My Home Description',
};

export const HomePage: FC = () => {
  return (
    <div className={styles['home-page']}>
      <main>
        <InchapinSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default HomePage;
