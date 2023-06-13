import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import stats from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={stats} title="UPLOAD STATS" />
      <Statistics stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </>
  );
};
