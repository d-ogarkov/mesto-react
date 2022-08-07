import React from 'react';
import Card from './Card';
import { api } from '../utils/api';

export default function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([resUserInfo, resInitialCards]) => {
        setUserName(resUserInfo.name);
        setUserDescription(resUserInfo.about);
        setUserAvatar(resUserInfo.avatar);
        setCards(resInitialCards);
    });
  });

  return (
    <main className="content">
      <section className="profile">
        <div id="aaa" className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-btn" onClick={props.onEditProfile}></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-btn" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card, i) => (
            <Card card={card} key={i} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}
