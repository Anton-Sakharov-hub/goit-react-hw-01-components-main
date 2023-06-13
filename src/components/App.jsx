import Profile from './Profile';
import Statistics from './Statistics';
import FriendsList from './FriendsList';
import TransactionHistory from './TransactionHistory';
import user from '../data/user.json';
import stats from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import './App.css';

export const App = () => {
  return (
    <div>
      <section className="appSaction">
        <Profile user={user} />
      </section>
      <section className="appSaction">
        <Statistics stats={stats} title="UPLOAD STATS" />
        <Statistics stats={stats} />
      </section>
      <section className="appSaction">
        <FriendsList friends={friends} />
      </section>
      <section className="appSaction">
        <TransactionHistory transactions={transactions} />
      </section>
    </div>
  );
};
