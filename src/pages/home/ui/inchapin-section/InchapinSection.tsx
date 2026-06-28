import { FC } from 'react';

import styles from './InchapinSection.module.scss';
import { SectionContainer } from '@/shared/ui/section-container';
import Image from 'next/image';
import { AccentSpan } from '@/shared/ui/accent-span';

interface InchapinSectionProps {}

export const InchapinSection: FC<InchapinSectionProps> = ({}) => {
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
            <Image
              width={862}
              height={137}
              priority
              className={styles['text-image']}
              src={'/images/foreground/INCHAPIN.svg'}
              alt={'inchapin'}
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
