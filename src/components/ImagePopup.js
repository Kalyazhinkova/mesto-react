function ImagePopup () {
  return(
    <div className="popup popup_big">
    <div className="popup__container">
      <button className="popup__close-button popup__close-button_big" type="button"></button>
      <img className="popup__image" />
      <p className="popup__image-name"></p>
    </div>
  </div>
  );
}

export default ImagePopup;