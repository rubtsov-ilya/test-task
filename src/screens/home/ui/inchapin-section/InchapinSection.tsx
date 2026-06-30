import { FC } from 'react';

import Image from 'next/image';

import { SectionContainer } from '@/shared/ui/section-container';
import { AccentSpan } from '@/shared/ui/accent-span';

import styles from './InchapinSection.module.scss';

export const InchapinSection: FC = () => {
  return (
    <section className={styles['inchapin-section']}>
      <SectionContainer>
        <div className={styles['content']}>
          <div className={styles['image-wrapper']}>
            <Image
              fill
              priority
              className={styles['image']}
              src={'/images/foreground/inchapin.jpg'}
              alt={'main-image'}
            />
          </div>

          <div className={styles['bottom-wrapper']}>
            <h1 className={styles['title']}>
              <AccentSpan
                className={styles['span']}
                color={'quaternary'}
                fontWeight={'w-400'}
              >
                Дом бизнес-класса
                <br />
                для ценителей роскоши
              </AccentSpan>
            </h1>
            <div className={styles['text-image-wrapper']}>
              <Image
                fill
                priority
                className={styles['text-image']}
                src={'/images/foreground/INCHAPIN.svg'}
                alt={'inchapin'}
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default InchapinSection;
