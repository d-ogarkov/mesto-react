export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image-view ${props.card && 'popup_opened'}`}>
      <div className="popup__media">
        <button type="button" className="popup__close-btn" onClick={props.onClose}></button>
        <img className="popup__image" src={props.card && props.card.link} alt="Просмотр изображения" />
        <p className="popup__caption"></p>
      </div>
    </div>
  );
}
