import React from 'react';

class RecentFights extends React.Component {
  render() {
    return (
      <section>
        <div id="row">
          <h1>Recent Fights</h1>
        </div>
        <img src="http://media.ufc.tv/generated_images_sorted//fight_286547_mediumThumbnail.jpg" alt="recent-fights"/>
        <div id="row" class="center">
          <h5>UFC 210 Cormier vs Johnson 2</h5>
          <p>Saturday, April 8 @ Buffalo, New York</p>
          <h5>Winner: Daniel Cormier</h5>
          <img src="http://media.ufc.tv/fighter_images/Daniel_Cormier/CORMIER_DANIEL.png" alt="winner"/>
        </div>
      </section>
    );
  }
}

export default RecentFights;
