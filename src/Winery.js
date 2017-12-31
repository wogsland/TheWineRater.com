import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumbs';
import './Winery.css';

const winery = {
  appellation: {
    id: 13,
    name: 'Rheingau',
    superAppellations: [],
  },
  description: "This is a winery I have never been to and know nothing about.",
  id: 1,
  location: 'Rüdesheim',
  name: 'Georg Breuer',
  vintages: [
    {
      id: 1337,
      name: "Spätburgunder Rosé Rheingau",
      year: 2015,
    },
    {
      id: 1338,
      name: "Spätburgunder Rosé Rheingau",
      year: 2014,
    },
    {
      id: 1339,
      name: "Fakey McWine",
      year: 2015,
    },
  ],
  website: '',
}

function getWineryID() {
  const urlPieces = window.location.href.split('/');
  return urlPieces[urlPieces.findIndex((el) => {return el === 'winery';})+1];
}

class Winery extends Component {
  renderVintages = () => {
    if (winery.vintages.length > 0){

      // rebuild array for display
      let vintages = [];
      for (let i=0; i < winery.vintages.length; i++) {
        let wineIndex = vintages.findIndex((el) => {
          return el.name === winery.vintages[i].name;
        });
        if (wineIndex === -1) {
          wineIndex = vintages.length;
          vintages.push({
            name: winery.vintages[i].name,
            years: [],
          });
        }
        const wineLink = '/wine/'+winery.vintages[i].id;
        vintages[wineIndex].years.push(
          {wineLink, year: winery.vintages[i].year}
        );
      }

      // order years
      for (let i=0; i < vintages.length; i++) {
        vintages[i].years.sort((a, b) =>{
          return a.year > b.year;
        })
      }
      return (
        <div className="Winery-vintages">
          <b>Vintages:</b>
          <br />
          {vintages.map((wine, j) => {
            return (
              <div key={j}>
              {wine.name+': '}
              {wine.years.map((link, i) => {
                return <font><a href={link.wineLink} key={i}>{link.year}</a>{' '}</font>;
              })}
              </div>
            );
          })}
        </div>
      );
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className="Winery">
        <Breadcrumbs
          appellation={winery.appellation}
          winery={winery}
        />
        <h1 className="Winery-name">
          {winery.name}
        </h1>
        <h1 className="Winery-location">
          {winery.location}
        </h1>
        <div className="Winery-description">
          {winery.description}
        </div>
        {this.renderVintages()}
      </div>
    );
  }
}

export default Winery;
