import Header from '../components/Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);


  const [selectedCard, setSelectedCard] = React.useState({});
  const [openPopupName, setOpenPopupName]= React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children={
        <form className="form" name="avatar-form" id="avatar-form" noValidate>
          <input type="url" className="form__item" id="avatar-link" name="avatar__link" required />
          <span className="avatar-link-error form__item-error"></span>
          <button type="submit" className="popup__button">Сохранить</button>
        </form>
      } />

      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
        children={
          <form className="form" name="profile-form" id="profile-form" noValidate>
            <input type="text" className="form__item" id="name" name="name" minLength="2" maxLength="40" required />
            <span className="name-error form__item-error"></span>
            <input type="text" className="form__item" id="about" name="about" minLength="2" maxLength="200" required />
            <span className="about-error form__item-error"></span>
            <button type="submit" className="popup__button">Сохранить</button>
          </form>
        } />

      <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children={
        <form className="form" name="add-form" id="add-form" noValidate>
          <input type="text" className="form__item" id="image-name" name="image__name" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="image-name-error form__item-error"></span>
          <input type="url" className="form__item" id="image-link" name="image__link" placeholder="Ссылка на картинку" required />
          <span className="image-link-error form__item-error"></span>
          <button type="submit" className="popup__button">Создать</button>
        </form>
      } />

      <div className="popup popup_delete">
        <section className="popup__content">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="submit" className="popup__button">Да</button>
        </section>
      </div>

    </>
  );

}

export default App;

