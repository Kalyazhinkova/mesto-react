import {useState, useEffect, useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about); 


  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleChangeName(e) {
    setName (e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription (e.target.value);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   props.onUpdateUser (name, description);
  // }
  
  return (
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} buttonText={"Сохранить"} 
    onSubmit={(e) => {
      e.preventDefault();
      props.onUpdateUser (name, description);
    }} >
      <input type="text" className="form__item" id="name" name="name" minLength="2" maxLength="40" required value={name} onChange={handleChangeName} />
      <span className="name-error form__item-error"></span>
      <input type="text" className="form__item" id="about" name="about" minLength="2" maxLength="200" required value={description} onChange={handleChangeDescription} />
      <span className="about-error form__item-error"></span>
    
  </PopupWithForm>
  );
}

export default EditAvatarPopup;