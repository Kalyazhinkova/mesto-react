import PopupWithForm from "./PopupWithForm";
import {useEffect, useRef} from 'react';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const newAvatar = useRef();
  useEffect(()=>{
    newAvatar.current.value ="";
  }, [isOpen]);

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} 
      buttonText={"Сохранить"} 
      onSubmit={(e) => { e.preventDefault(); onUpdateAvatar({avatar:newAvatar.current.value}); }} >
      <form className="form" name="avatar-form" id="avatar-form" noValidate>
        <input type="url" className="form__item" id="avatar-link" name="avatar__link" ref={newAvatar} required/>
        <span className="avatar-link-error form__item-error"></span>
      </form>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;