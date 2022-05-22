import React, { FC } from 'react';
import style from './TitleMainPage.module.scss';
import Button from '@mui/material/Button';

interface TitlePageMainProps {
  getModal: () => void;
}

export const TitlePageMain: FC<TitlePageMainProps> = (props) => {
  const callModal = () => {
    props.getModal();
  };

  return (
    <section className={style.container}>
      <div className={style.logoContainer}>
        <div className={style.logo}></div>
        <h3 className={style.subttl}>Доски</h3>
      </div>
      <Button
        className={style.createBtn}
        sx={{
          textTransform: 'none',
          fontSize: '16px',
        }}
        variant="contained"
        onClick={callModal}
      >
        Создать доску
      </Button>
    </section>
  );
};
