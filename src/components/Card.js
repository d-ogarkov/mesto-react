export default function Card(props) {
  return (
    <li className="element">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <button type="button" className="element__trash-btn"></button>
      <div className="element__caption">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button type="button" className="element__like-btn"></button>
          <div className="element__like-counter">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  );

  function handleClick() {
    props.onCardClick(props.card);
  }
}
