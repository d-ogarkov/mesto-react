export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
    <div className="popup__container">
      <form action="/" method="post" name={props.name} className={`form ${props.name}`}>
        <button type="button" className="popup__close-btn" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
      </form>
    </div>
    </div>
  );
}
