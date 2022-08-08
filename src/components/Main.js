import {useEffect, useState} from 'react';
import Card from './Card';
import { api } from '../utils/api';

export default function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([resUserInfo, resInitialCards]) => {
        setUserName(resUserInfo.name);
        setUserDescription(resUserInfo.about);
        setUserAvatar(resUserInfo.avatar);
        setCards(resInitialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main className="content">
      <section className="profile">
        <div id="aaa" className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-btn" onClick={onEditProfile}></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-btn" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card, i) => (
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}
