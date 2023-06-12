import clsx from 'clsx';
import style from './Profile.module.css';

function addPointerToNumber(number) {
  let stringNumber = String(number);

  if (stringNumber.length > 3) {
    let numberWithPointer = stringNumber.split('');
    numberWithPointer.splice(1, 0, ',');

    return numberWithPointer.join('');
  }

  return number;
}

addPointerToNumber(1555);

function Profile({ user }) {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;

  return (
    <div className={style.cardWrap}>
      <div className={style.discription}>
        <div className={style.thumb}>
          <img src={avatar} alt={username} className={style.avatar} />
        </div>
        <p className={clsx(style.cardInfo, style.mainText)}>{username}</p>
        <p className={`${style.cardInfo} ${style.secondaryText}`}>{tag}</p>
        <p className={`${style.cardInfo} ${style.secondaryText}`}>{location}</p>
      </div>
      <ul className={style.stats}>
        <li className={style.statsItem}>
          <span className={style.label}>Followers </span>
          <span className={style.quantity}>
            {addPointerToNumber(followers)}
          </span>
        </li>
        <li className={style.statsItem}>
          <span className={style.label}>Views </span>
          <span className={style.quantity}>{addPointerToNumber(views)}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.label}>Likes </span>
          <span className={style.quantity}>{addPointerToNumber(likes)}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;


