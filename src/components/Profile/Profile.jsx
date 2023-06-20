import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function addPointerToNumber(number) {
  let stringNumber = String(number);

  if (stringNumber.length > 3) {
    let numberWithPointer = stringNumber.split('');
    numberWithPointer.splice(1, 0, ',');

    return numberWithPointer.join('');
  }

  return number;
}

function Profile({ user }) {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;

  return (
    <div className={styles.cardWrap}>
      <div className={styles.discription}>
        <div className={styles.thumb}>
          <img
            src={avatar}
            alt={`${username}'s avatar`}
            className={styles.avatar}
          />
        </div>
        <p className={clsx(styles.cardInfo, styles.mainText)}>{username}</p>
        <p className={`${styles.cardInfo} ${styles.secondaryText}`}>@{tag}</p>
        <p className={`${styles.cardInfo} ${styles.secondaryText}`}>
          {location}
        </p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers </span>
          <span className={styles.quantity}>
            {addPointerToNumber(followers)}
          </span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views </span>
          <span className={styles.quantity}>{addPointerToNumber(views)}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes </span>
          <span className={styles.quantity}>{addPointerToNumber(likes)}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Profile;
