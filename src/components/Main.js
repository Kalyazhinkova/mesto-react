import avatarImg from '../images/avatar.png';

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-group">
          <img src={avatarImg} alt="Аватар" className="profile__avatar" />
          <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar}></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
      </section>xs
    </main>
  );
}

export default Main;