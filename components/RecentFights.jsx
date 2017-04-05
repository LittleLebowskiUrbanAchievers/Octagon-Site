import React from 'react';

class RecentFights extends React.Component {
  render() {
    return (
      <section>
        <div id="row">
          <h1>Recent Fights</h1>
        </div>
        <img src="http://media.ufc.tv/generated_images_sorted//fight_286500_smallThumbnail.jpg" alt="recent-fights"/>
        <div id="row" class="center">
          <h5>UFC 209 Woodley vs Thompson 2</h5>
          <p>Saturday, March 4 @ Las Vegas, Nevada</p>
          <h5>Winner: Tyron Woodley</h5>
          <img src="http://media.ufc.tv/fighter_images/Tyrone_Woodley/WOODLEY_TYRON.png" alt="winner"/>
        </div>
      </section>
    );
  }
}

export default RecentFights;
