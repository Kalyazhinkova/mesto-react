import Header from '../components/Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
      <div className="body">
        <div className="page">
          <Header />
          <Main />
          <Footer />
        </div>

        <div className="popup  popup_profile">
          <section className="popup__content">
            <button className="popup__close-button popup__close-button_profile" type="button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="form" name="profile-form" id="profile-form" noValidate>
              <input type="text" className="form__item" id="name" name="name" minLength="2" maxLength="40" required />
              <span className="name-error form__item-error"></span>
              <input type="text" className="form__item" id="about" name="about" minLength="2" maxLength="200" required />
              <span className="about-error form__item-error"></span>
              <button type="submit" className="popup__button">Сохранить</button>
            </form>
          </section>
        </div>

        <div className="popup popup_avatar">
          <section className="popup__content">
            <button className="popup__close-button" type="button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="form" name="avatar-form" id="avatar-form" noValidate>
              <input type="url" className="form__item" id="avatar-link" name="avatar__link" required />
              <span className="avatar-link-error form__item-error"></span>
              <button type="submit" className="popup__button">Сохранить</button>
            </form>
          </section>
        </div>

        <div className="popup popup_add">
          <section className="popup__content">
            <button className="popup__close-button popup__close-button_add" type="button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form className="form" name="add-form" id="add-form" noValidate>
              <input type="text" className="form__item" id="image-name" name="image__name" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="image-name-error form__item-error"></span>
              <input type="url" className="form__item" id="image-link" name="image__link" placeholder="Ссылка на картинку" required />
              <span className="image-link-error form__item-error"></span>
              <button type="submit" className="popup__button">Создать</button>
            </form>
          </section>
        </div>

        <div className="popup popup_big">
          <div className="popup__container">
            <button className="popup__close-button popup__close-button_big" type="button"></button>
            <img className="popup__image" />
            <p className="popup__image-name"></p>
          </div>
        </div>

        <div className="popup popup_delete">
          <section className="popup__content">
            <button className="popup__close-button" type="button"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" className="popup__button">Да</button>
          </section>
        </div>

        <template id="element-template">
          <article className="element">
            <img className="element__image" alt="Фотография" />
            <button className="element__trash" type="button"></button>
            <div className="element__print">
              <h2 className="element__title"></h2>
              <div className="element__like-group">
                <button className="element__like" type="button"></button>
                <p className="element__counter">0</p>
              </div>

            </div>
          </article>
        </template>
      </div>
  );
}

export default App;
