import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup";
import Footer from './Footer';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="edit-form" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__fieldset">
          <label className="popup__field">
            <input type="text" id="name-input" name="name" className="popup__input popup__input_type_name" placeholder="Имя" required minLength="2" maxLength="40" />
            <span className="popup__error name-input-error"></span>
          </label>
          <label className="popup__field">
            <input type="text" id="about-input" name="about" className="popup__input popup__input_type_about" placeholder="Титул" required minLength="2" maxLength="200" />
            <span className="popup__error about-input-error"></span>
          </label>
        </fieldset>
        <input type="submit" className="popup__submit-btn popup__submit-btn_disabled" value="Сохранить" />
      </PopupWithForm>
      <PopupWithForm name="add-form" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__fieldset">
          <label className="popup__field">
            <input type="text" id="title-input" name="title" className="popup__input popup__input_type_title" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__error title-input-error"></span>
          </label>
          <label className="popup__field">
            <input type="url" id="link-input" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required />
            <span className="popup__error link-input-error"></span>
          </label>
        </fieldset>
        <input type="submit" className="popup__submit-btn popup__submit-btn_disabled" value="Сохранить" />
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm name="delete-form" title="Вы уверены?" onClose={closeAllPopups}>
        <input type="submit" className="popup__submit-btn" value="Да" />
      </PopupWithForm>
      <PopupWithForm name="avatar-form" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__fieldset">
          <label className="popup__field">
            <input type="url" id="avatar-input" name="avatar" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required />
            <span className="popup__error avatar-input-error"></span>
          </label>
        </fieldset>
        <input type="submit" className="popup__submit-btn popup__submit-btn_disabled" value="Сохранить" />
      </PopupWithForm>
    </div>
  );

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }
}

export default App;
