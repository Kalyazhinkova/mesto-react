import {useState, useEffect} from 'react';
import api from '../utils/Api';
import Card from './Card';


function Main(props) {

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

  const cardComponent =  cards.map((card) => {
    // <Card 
    // key = {card._id}
    // card = {card}
    // />
   return (
    <>
    <article className="element">
      <img className="element__image" alt={`Фотография. ${card.name}`} src={card.link}/>
      <button className="element__trash" type="button"></button>
      <div className="element__print">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-group">
          <button className="element__like" type="button"></button>
          <p className="element__counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  </>
   );
  });

  console.log(cardComponent);

  return ( 
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-group">
          <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
          <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
       {cardComponent}
      </section>
    </main>
  );
}

export default Main;