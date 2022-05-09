import style from './test.module.scss';
import pic from '../assets/test1.jpg';

export const TestComponent = () => {
  return (
    <div className={style.testContainer}>
      <img className={style.testImg} src={pic} alt="" />
      <div className={style.testBcgr}></div>
    </div>
  );
};
