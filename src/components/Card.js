export default function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <button type="button" className="element__trash-btn"></button>
      <div className="element__caption">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button type="button" className="element__like-btn"></button>
          <div className="element__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}
