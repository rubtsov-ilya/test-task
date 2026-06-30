import { FC } from 'react';

import styles from './NotFoundPage.module.scss';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Not Found Title',
  description: 'My Not Found Description',
};

export const NotFoundPage: FC = () => {
  return <main className={styles['not-found-page']}>not-found</main>;
};

export default NotFoundPage;
