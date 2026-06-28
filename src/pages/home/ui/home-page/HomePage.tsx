import { FC } from 'react';

import styles from './HomePage.module.scss';
import { InchapinSection } from '@/pages/home/ui/inchapin-section/InchapinSection.tsx';
import type { Metadata } from 'next';

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
        </main>
    </div>
  );
};
