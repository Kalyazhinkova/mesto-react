import React from 'react';

function PopupWithForm (props) {
  const openClassName = (props.isOpen? 'popup_open' : '' );

    return (
      <div className={`popup popup_${props.name} ${openClassName}`}>
      <section className="popup__content">
        <button className="popup__close-button popup__close-button_profile" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__button">{props.buttonText}</button>
      </section>
    </div>
    );
}

export default PopupWithForm;