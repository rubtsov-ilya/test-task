import { FC } from 'react';

import Link from 'next/link';

import { SectionContainer } from '@/shared/ui/section-container';
import { Media } from '@/providers/media-provider';
import { InchapinLogoIcon } from '@/shared/assets/icons';
import { Select } from '@/shared/ui/select';
import { Burger } from '@/shared/ui/burger';
import { CallButton } from '@/shared/ui/call-button';
import { FormModal } from '@/widgets/form-modal';
import { PhoneButton } from '@/shared/ui/phone-button';

import styles from './MainHeader.module.scss';

const APARTMENT_OPTIONS = [
  { value: 'studio', label: 'Студия' },
  { value: '1-room', label: '1-комнатная' },
  { value: '2-room', label: '2-комнатная' },
  { value: '3-room', label: '3-комнатная' },
  { value: '4-room', label: '4-комнатная' },
];

export const MainHeader: FC = () => {
  return (
    <header className={styles['main-header']}>
      <SectionContainer>
        <div className={styles['content']}>
          <div className={styles['left-wrapper']}>
            <Burger />
            <Media greaterThanOrEqual='tablet'>
              <Select options={APARTMENT_OPTIONS}>Выбрать квартиру</Select>
            </Media>
            <Media between={['tabletSmall', 'tablet']}>
              <FormModal>
                <PhoneButton />
              </FormModal>
            </Media>
          </div>
          <InchapinLogoIcon className={styles['logo']} />
          <div className={styles['right-wrapper']}>
            <Media lessThan={'tabletSmall'}>
              <FormModal>
                <PhoneButton />
              </FormModal>
            </Media>
            <Media between={['tabletSmall', 'tablet']}>
              <Select options={APARTMENT_OPTIONS}>Выбрать квартиру</Select>
            </Media>
            <Media
              className={styles['tel-with-call-wrapper']}
              greaterThanOrEqual='tablet'
            >
              <Link className={styles['tel-number']} href='tel:+74955272121'>
                +7 495 527 21 21
              </Link>
              <FormModal>
                <CallButton />
              </FormModal>
            </Media>
          </div>
        </div>
      </SectionContainer>
    </header>
  );
};
