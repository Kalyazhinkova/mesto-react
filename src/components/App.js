import Header from '../components/Header';
import Main from './Main';
import api from '../utils/Api';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import {useState, useEffect} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [openPopupName, setOpenPopupName] = useState(false);

  
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    (api.getUserInfo())
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(console.error);
  }, []);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    (api.getInitialCards())
      .then((initialCards) => {
        setCards(initialCards.slice().reverse());
      })
      .catch(console.error);
  }, []);


  function onCardClick(card) {
    setSelectedCard(card);
    setOpenPopupName(true);
  };

  function handleCardLike (card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id)
      api.likeCard(card._id, !isLiked)
      .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(console.error);
  };

  function handleCardDelete (card) {
    api.deleteCardById(card._id)
    .then(() => {
      const updatedCards = cards.filter(({_id}) => _id !== card._id);
      setCards(updatedCards);
    })
    .catch(console.error);
  }

  function handleUpdateUser(name, about) {
    api.setNewUserInfo(name, about)
    .then((user) => {
      setCurrentUser(user);
    })
    .catch(console.error);
    closeAllPopups();
  };

  function handleUpdateAvatar (avatar) {
    api.setNewAvatar(avatar)
    .then((user) => {
      setCurrentUser(user);
    })
    .catch(console.error);
    closeAllPopups();
  };

  function handleAddPlaceSubmit (newCard) {
    console.log(newCard);
    api.createCard (newCard)
    .then((res) => {
      setCards([res, ...cards]);
    })
    .catch(console.error);
    closeAllPopups();
  };

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
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        cards = {cards}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={onCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />

    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />  

    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} /> 

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

    </CurrentUserContext.Provider>
  );
}

export default App;

