import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import logo from './logo.svg';
import './Wine.css';

const wine = {
  appellation: {
    id: 1337,
    name: "Rheingau",
    superAppellations: [
      {
        id: 13,
        name: "Europe",
      },
      {
        id: 1,
        name: "Deutschland",
      },
      {
        id: 133,
        name: "Hessen",
      },
    ],
  },
  created: "2017",
  modified: "2017",
  name: "2015 Spätburgunder Rosé Rheingau",
  tastings: [
    {
      stars: 0,
      ratingText: "This wine didn't exist yet.",
      year: 2013,
    },
    {
      stars: 3,
      ratingText: "This wine has a light, rosé coloration and a muted bouquet. The flavor has a surprisingly tart finish after a somewhat puckering, yet refreshing flavor.",
      year: 2017,
    },
  ],
  winery: {
    id: 1,
    name: "Georg Breuer",
  },
};

function getWineID() {
  const urlPieces = window.location.href.split('/');
  return urlPieces[urlPieces.findIndex((el) => {return el === 'wine';})+1];
}

class Wine extends Component {
  renderRatings = () => {
    return (
      <div>
        {wine.tastings.map((tasting, i) => {
          return (
            <div key={i}>
              <h3>{tasting.year} Tasting</h3>
              <div className="Wine-stars">
                {this.renderStars(tasting.stars)}
              </div>
              <p className="Wine-rating-text">{tasting.ratingText}</p>
            </div>
          ); })
        }
      </div>
    );
  }

  renderStars = (starCount) => {
    let stars = [];

    for (let i=0; i<starCount; i++) {
      stars.push(<img src={logo} className="App-logo" alt="logo" key={i}/>);
    }

    return (
      <div>
        {0 === stars.length ? '(no stars)' : stars.map((val) => { return val; })}
      </div>
    );
  }

  render() {
    return (
      <div className="Wine">
        <Breadcrumbs
          appellation={wine.appellation}
          wineName={wine.name}
          winery={wine.winery}
        />
        <h1 className="Wine-name">
          {wine.name}
        </h1>
        <h1 className="Winery-name">
          {wine.winery.name}
        </h1>
        <div className="Wine-rating">
          {this.renderRatings()}
        </div>
        <Footer
          firstChange={wine.created}
          lastChange={wine.modified}
        />
      </div>
    );
  }
}

export default Wine;
