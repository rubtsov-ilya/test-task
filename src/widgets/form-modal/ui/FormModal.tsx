'use client';
import { FC, ReactNode, useState } from 'react';

import styles from './FormModal.module.scss';
import { Modal, useModalContext } from 'react-modal-core';
import { CrossIcon } from '@/shared/assets/icons';
import { Button } from '@/shared/ui/button';
import { AccentSpan } from '@/shared/ui/accent-span';
import { Input } from '@/shared/ui/input';
import { Media } from '@/providers/media-provider';
// react-modal-core это моя библиотека из моего github, поэтому использую её в проекте

interface FormModalProps {
  children: ReactNode;
}

export const FormModal: FC<FormModalProps> = ({ children }) => {
  const modalContext = useModalContext();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = name.trim().length > 0;
    const isPhoneValid = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setErrors({
      name: !isNameValid,
      phone: !isPhoneValid,
      email: !isEmailValid,
    });

    if (isNameValid && isPhoneValid && isEmailValid) {
      console.log({ name, phone, email });
      alert('Форма успешно отправлена!');

      setName('');
      setPhone('');
      setEmail('');

      // Close the modal
      if (modalContext) {
        modalContext.closeModal('form-modal');
      }
    }
  };

  return (
    <Modal id='form-modal'>
      <Modal.Trigger asChild>{children}</Modal.Trigger>
      <Modal.Portal>
        <Modal.Content className={styles['modal-content']}>
          <form className={styles['wrapper']} onSubmit={handleSubmit}>
            <h2 className={styles['title']}>Заказать звонок</h2>
            <div className={styles['inputs-wrapper']}>
              <Input
                label='Ваше имя'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name)
                    setErrors((prev) => ({ ...prev, name: false }));
                }}
                error={errors.name}
              />
              <Input
                label='Телефон'
                mask='+7 (999) 999-99-99'
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone)
                    setErrors((prev) => ({ ...prev, phone: false }));
                }}
                error={errors.phone}
              />
              <Input
                label='E-mail'
                type='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email)
                    setErrors((prev) => ({ ...prev, email: false }));
                }}
                error={errors.email}
              />
            </div>

            <Media greaterThanOrEqual={'desktopSmall'}>
              <p className={styles['subtitle']}>
                Нажимая на кнопку «Отправить», вы ознакомлены
                <br />и соглашаетесь с{' '}
                <AccentSpan color={'quinary'} underline>
                  политикой обработки персональных данных
                </AccentSpan>
              </p>
            </Media>

            <Media between={['tabletSmall', 'desktopSmall']}>
              <p className={styles['subtitle']}>
                Нажимая на кнопку «Отправить», вы ознакомлены и подтверждаете
                <br />
                согласие с{' '}
                <AccentSpan color={'quinary'} underline>
                  политикой обработки персональных данных
                </AccentSpan>
              </p>
            </Media>

            <Media lessThan={'tabletSmall'}>
              <p className={styles['subtitle']}>
                Нажимая на кнопку «Отправить», вы ознакомлены <br />и
                подтверждаете согласие с{' '}
                <AccentSpan color={'quinary'} underline>
                  политикой обработки
                  <br /> персональных данных
                </AccentSpan>
              </p>
            </Media>

            <Button type='submit' className={styles['submit-button']}>
              Отправить
            </Button>
          </form>
          <Modal.Close className={styles['close-btn']}>
            <CrossIcon />
          </Modal.Close>
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  );
};
