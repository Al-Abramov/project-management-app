import React, { FC } from 'react';
import style from './TitleMainPage.module.scss';

interface TitlePageMainProps {
  getModal: () => void;
}

export const TitlePageMain: FC<TitlePageMainProps> = (props) => {
  const callModal = () => {
    props.getModal();
    console.log('MODAL');
  };

  return (
    <section className={style.container}>
      <div className={style.logoContainer}>
        <div className={style.logo}></div>
        <h3 className={style.subttl}>Доски</h3>
      </div>
      <button className={style.createBtn} onClick={callModal}>
        Создать доску
      </button>
    </section>
  );
};
