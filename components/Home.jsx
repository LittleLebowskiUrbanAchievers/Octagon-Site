import React from 'react';
import RecentFights from './RecentFights.jsx';
import Upcoming from './Upcoming.jsx';

class Home extends React.Component {
   render() {
      return (
        <div>
          <RecentFights />
          <Upcoming />
        </div>
      );
   }
}

export default Home;
