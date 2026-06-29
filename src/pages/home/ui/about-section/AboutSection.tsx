import { FC } from 'react';

import styles from './AboutSection.module.scss';
import { SectionContainer } from '@/shared/ui/section-container';
import { AccentSpan } from '@/shared/ui/accent-span';
import Image from 'next/image';
import { Player } from '@/shared/ui/player';

interface AboutSectionProps {}

export const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
    <section className={styles['about-section']}>
      <SectionContainer>
        <div className={styles['content']}>
          <div className={styles['left-wrapper']}>
            <AccentSpan
              className={styles['about']}
              color={'quaternary'}
              fontWeight={'w-400'}
            >
              О ПРОЕКТЕ
            </AccentSpan>
            <div className={styles['image-wrapper']}>
              <Image
                fill
                priority
                className={styles['image']}
                src={'/images/foreground/eden.jpg'}
                alt={'image'}
              />
              <div>иконка</div>
            </div>
          </div>

          <div className={styles['right-wrapper']}>
            <div className={styles['rect']} />
            <h2 className={styles['title']}>
              уютное и безопасное пространство для счастливой,
              <br />
              <AccentSpan color={'quaternary'} fontWeight={'w-400'}>
                спокойной и размеренной жизни
              </AccentSpan>
            </h2>
            <p className={styles['subtitle']}>
              <AccentSpan color={'quaternary'} fontWeight={'w-400'}>
                Квартиры от 65 до 356 м2 с чистовой отделкой,{' '}
              </AccentSpan>
              <br />
              балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой
              территории.
            </p>
            <div className={styles['bottom-wrapper']}>
              <div className={styles['text-wrapper']}>
                <AccentSpan
                  className={styles['about-project']}
                  color={'secondary'}
                  fontWeight={'w-600'}
                >
                  ВИДЕО о ПРОЕКТЕ
                </AccentSpan>
                <AccentSpan
                  className={styles['timer']}
                  color={'quinary'}
                  fontWeight={'w-400'}
                >
                  1:25 минут
                </AccentSpan>
              </div>
              <hr className={styles['line']} />
              <Player />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
