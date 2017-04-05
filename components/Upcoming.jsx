import React from 'react';

class Upcoming extends React.Component {
  render() {
    return (
      <section>
        <div id="row">
          <h1>Upcoming Fights</h1>
        </div>
        <img src="http://media.ufc.tv/generated_images_sorted//fight_286547_mediumThumbnail.jpg" alt="upcoming-fight"/>
        <div id="row" class="center">
          <h5>UFC 210 Cormier vs Johnson 2</h5>
          <p>Saturday, April 8 @ 10pm/7pm ET PT</p>
        </div>
      </section>
    );
  }
}

export default Upcoming;
