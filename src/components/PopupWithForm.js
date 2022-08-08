export default function PopupWithForm({name, title, buttonText, isOpen, onClose, children}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
    <div className="popup__container">
      <form action="/" method="post" name={name} className={`form ${name}`}>
        <button type="button" className="popup__close-btn" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <input type="submit" className="popup__submit-btn popup__submit-btn_disabled" value={buttonText} />
      </form>
    </div>
    </div>
  );
}
