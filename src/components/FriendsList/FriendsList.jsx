import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={styles.friendsList}>
      {friends?.map(({ id, avatar, name, isOnline }) => (
        <li className={styles.item} key={id}>
          <span
            className={styles.status}
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}
          ></span>
          <img className={styles.avatar} src={avatar} alt={name} />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
  // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // avatar: PropTypes.string,
  // name: PropTypes.string,
  // isOnline: PropTypes.string,
};

export default FriendsList;

// [
//   {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812
//   },
//   {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/616/616438.png",
//     "name": "Kiwi",
//     "isOnline": false,
//     "id": 1137
//   },
//   {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
//     "name": "Ajax",
//     "isOnline": true,
//     "id": 1213
//   },
//   {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
//     "name": "Jay",
//     "isOnline": true,
//     "id": 1714
//   },
//   {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
//     "name": "Poly",
//     "isOnline": false,
//     "id": 1284
//   }
// ]
