import React from 'react';
import ReactDOM from 'react-dom';

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }
  handleCloseButton = () => {
    this.setState({isOpen: !this.state.isOpen});
  };
  render() {
    return (
      <div className={`popup popup_${this.props.name} popup_open`}>
      <section className="popup__content">
        <button className="popup__close-button popup__close-button_profile" type="button"></button>
        <h2 className="popup__title">{this.props.title}</h2>
        <form className="form" name="profile-form" id="profile-form" noValidate>
          <input type="text" className="form__item" id="name" name="name" minLength="2" maxLength="40" required />
          <span className="name-error form__item-error"></span>
          <input type="text" className="form__item" id="about" name="about" minLength="2" maxLength="200" required />
          <span className="about-error form__item-error"></span>
          <button type="submit" className="popup__button">{this.props.button}</button>
        </form>
      </section>
    </div>
    );
  }
}

export default PopupWithForm;