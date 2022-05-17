import style from './TitleMainPage.module.scss';

export const TitlePageMain = () => {
  return (
    <section className={style.container}>
      <div className={style.logoContainer}>
        <div className={style.logo}></div>
        <h3 className={style.subttl}>Доски</h3>
      </div>
      <button className={style.createBtn}>Создать доску</button>
    </section>
  );
};
