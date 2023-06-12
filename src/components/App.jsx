import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../data/user.json';
import stats from '../data/statistics.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={stats} title="UPLOAD STATS" />
      <Statistics stats={stats}  />
    </>
  );
};
