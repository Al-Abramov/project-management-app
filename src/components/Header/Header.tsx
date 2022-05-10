import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const token = false;

  return (
    <header className={styles.header}>
      <h2>header</h2>
      <div>
        <Link to="edit-profile">edit profile</Link>
        <button>logout</button>
        <button>create new board</button>
        <label>
          тогглер локализации
          <input type="checkbox" name="language" />
        </label>
      </div>
      <ul>
        <li>
          На всех роутах доступных при наличии токена должен присутствовать sticky header ( момент,
          когда он становится sticky (при наличии на странице скролла) должен быть анимирован
          (например его цвет может потемнеть или высота слегка уменьшится)).
        </li>
        <li>
          В хэдере должны быть кнопки: edit profile, logout, create new board, тогглер локализации.
          Edit profile должен отправлять нас на роут с формой для edit profile. Требования к форме
          такие же как и ко всем формам в приложении. Должна быть кнопка удаления юзера. В случае
          этого действия =&gt; &quot;confirmation modal&quot; =&gt; пользователя должно разлогинить
          и пользователь должен быть удалён из базы данных.
        </li>
        <li>Логаут - логаутит.</li>
        <li>create new board - открывает модальное окно с формой для создания борды.</li>
        <li>Требования к форме такие же как и ко всем формам в приложении.</li>
      </ul>
    </header>
  );
};

export default Header;
