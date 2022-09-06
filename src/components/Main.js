import avatarImg from '../images/avatar.png';

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-group">
          <img src={avatarImg} alt="Аватар" className="profile__avatar" />
          <button className="profile__avatar-edit" type="button"></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__edit-button" type="button"></button>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>
      <section className="elements">
      </section>
    </main>
  );
}





function handleEditAvatarClick () {
  const avatarPopup = document.querySelector('.popup_avatar')
  avatarPopup.classList.add('popup_poen');
}

export default Main;