import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumbs';
import './Appellation.css';

const appellation = {
  description: "Rheingau is a Weinbaugebiet located in Hessen. Famed as the birthplace of Riesling, which was once called Johannisberg Riesling after the region's Schloß Johannisberg, this region is also home to Hochheim, where the British term Hock has its roots.",
  id: 13,
  location: 'Deutschland',
  name: 'Rheingau',
  superAppellations: [],
  website: '',
  wineries: [
    {
      id: 23456,
      name: 'Very badly ordered',
    },
    {
      id: 13,
      name: 'Georg Beuer',
    },
    {
      id: 13,
      name: 'Messerschmidt',
    },
  ],
};

function getAppellationID() {
  const urlPieces = window.location.href.split('/');
  return urlPieces[urlPieces.findIndex((el) => { return el === 'appellation'; }) + 1];
}

class Appellation extends Component {
  renderWineries = () => {
    appellation.wineries.sort((a, b) => {
      return a.name > b.name;
    });
    return (
      <div className="Appellation-wineries">
        {appellation.wineries.map((winery, i) => {
          const wineryLink = '/winery/'+winery.id;
          return <div><a href={wineryLink} key={i}>{winery.name}</a></div>;
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="Appellation">
        <Breadcrumbs
          appellation={appellation}
        />
        <h1 className="Appellation-name">
          {appellation.name}
        </h1>
        <h1 className="Appellation-location">
          {appellation.location}
        </h1>
        <div className="Appellation-description">
          {appellation.description}
        </div>
        {this.renderWineries()}
      </div>
    );
  }
}

export default Appellation;
