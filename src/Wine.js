import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import Header from './Header';
import logo from './logo.svg';
import './Wine.css';

const appellation = "Rheingau";
const ratingText = "This wine has a light, rosé coloration and a muted bouquet. The flavor has a surprisingly tart finish after a somewhat puckering, yet refreshing flavor."
const starCount = 5;
const wineName = "2005 Spätburgunder Rosé Rheingau";
const wineryName = "Georg Breuer";

class Wine extends Component {

  renderStars = () => {
    let stars = [];

    for (let i=0; i<starCount; i++) {
      stars.push(<img src={logo} className="App-logo" alt="logo" key={i}/>);
    }

    return (
      <div>
        {stars.map((val) => { return val; })}
      </div>
    );
  }

  render() {
    return (
      <div className="Wine">
        <Header />
        <Breadcrumbs
          appellation={appellation}
          wineName={wineName}
          wineryName={wineryName}
        />
        <h1 className="Wine-name">
          {wineName}
        </h1>
        <h1 className="Winery-name">
          {wineryName}
        </h1>
        <div className="Wine-stars">
          {this.renderStars()}
        </div>
        <p className="Wine-rating">
          {ratingText}
        </p>
        <Footer />
      </div>
    );
  }
}

export default Wine;
