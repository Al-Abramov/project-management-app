import { Link } from 'react-router-dom';

const Authorization = () => {
  return (
    <>
      <div>
        <h3>Authorization</h3>
        <div>формой для Login / Sign up</div>

        <p>
          Поля форм должны быть реализованы в соответствии с api backend приложения. Должна быть
          реализована валидация.
        </p>
        <p>
          Ошибки со стороны BE - (Not found, unhandled rejection, etc) должны отображаться
          пользователю в user-friendly формате (toast, pop-up или что-то подобное, на ваше
          усмотрение).
        </p>
        <p>При успешном логине пользователь должен быть перенаправлен на &quot;Main route&quot;</p>
      </div>

      <Link to="/registration">Зарегистрироваться</Link>
    </>
  );
};

export default Authorization;
