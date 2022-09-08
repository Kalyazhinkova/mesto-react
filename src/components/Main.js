import avatarImg from '../images/avatar.png';
import React from 'react';
import api from '../utils/Api';

function Main(props) {

const [userName, setUserName] = React.useState('Жак-Ив Кусто');
const [userDescription, setUserDescription] = React.useState('Исследователь океана');
const [userAvatar, setUserAvatar] = React.useState(avatarImg);

// React.useEffect(() => {
//   updateUserInfo(userName);
// }, [userName]);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-group">
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
      </section>
    </main>
  );
}

export default Main;