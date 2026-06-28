import { FC } from 'react';
import styles from './MainHeader.module.scss';
import { SectionContainer } from '@/shared/ui/section-container';
import Link from 'next/link';
import { Media } from '@/providers/media-provider';
import { InchapinLogoIcon } from '@/shared/assets/icons';
import { Select } from '@/shared/ui/select';
import { Burger } from '@/shared/ui/burger';

const APARTMENT_OPTIONS = [
  { value: 'studio', label: 'Студия' },
  { value: '1-room', label: '1-комнатная' },
  { value: '2-room', label: '2-комнатная' },
  { value: '3-room', label: '3-комнатная' },
  { value: '4-room', label: '4-комнатная' },
];

interface MainHeaderProps {}

export const MainHeader: FC<MainHeaderProps> = ({}) => {
  return (
    <header className={styles['main-header']}>
      <SectionContainer>
        <div className={styles['content']}>
          <div className={styles['left-wrapper']}>
            <Burger />
            <Media greaterThanOrEqual='tabletSmall'>
              <Select options={APARTMENT_OPTIONS}>Выбрать квартиру</Select>
            </Media>
            <Media between={['phone', 'tabletSmall']}>
              <img src='' alt='Иконка телефона' />
            </Media>
          </div>
          <InchapinLogoIcon className={styles['logo']} />
          <div className={styles['right-wrapper']}>
            <Media lessThan={'phone'}>
              <img src='' alt='Иконка телефона' />
            </Media>
            <Media between={['phone', 'tabletSmall']}>
              <button>Выбрать квартиру</button>
            </Media>
            <Media
              className={styles['tel-with-call-wrapper']}
              greaterThanOrEqual='tabletSmall'
            >
              <Link className={styles['tel-number']} href='tel:+74955272121'>
                +7 495 527 21 21
              </Link>
              <button className={styles['call']}>Заказать звонок</button>
            </Media>
          </div>
        </div>
      </SectionContainer>
    </header>
  );
};
