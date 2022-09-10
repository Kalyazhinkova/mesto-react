import Header from '../components/Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {useState} from 'react';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [openPopupName, setOpenPopupName] = useState(false);

  function onCardClick(card) {
    setSelectedCard(card);
    setOpenPopupName(true);
  }

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
    setOpenPopupName(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={onCardClick}
      />
      <Footer />

      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText={"Сохранить"}>
        <form className="form" name="avatar-form" id="avatar-form" noValidate>
          <input type="url" className="form__item" id="avatar-link" name="avatar__link" required />
          <span className="avatar-link-error form__item-error"></span>
        </form>
      </PopupWithForm>

      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText={"Сохранить"}>
        <form className="form" name="profile-form" id="profile-form" noValidate>
          <input type="text" className="form__item" id="name" name="name" minLength="2" maxLength="40" required />
          <span className="name-error form__item-error"></span>
          <input type="text" className="form__item" id="about" name="about" minLength="2" maxLength="200" required />
          <span className="about-error form__item-error"></span>
        </form>
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText={"Создать"}>
        <form className="form" name="add-form" id="add-form" noValidate>
          <input type="text" className="form__item" id="image-name" name="image__name" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="image-name-error form__item-error"></span>
          <input type="url" className="form__item" id="image-link" name="image__link" placeholder="Ссылка на картинку" required />
          <span className="image-link-error form__item-error"></span>
        </form>
      </PopupWithForm>

      <ImagePopup card={selectedCard} isOpen={openPopupName} onClose={() => {
        closeAllPopups();
        setSelectedCard({});
      }} />

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

