import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumbs';
import './Grape.css';
import grapes from './data/grapes.js';

console.log(grapes)

const grape = {
  description: 'Spätburgunder is nummers!',
  id: 13,
  name: 'Spätburgunder',
  vintages: [
    {
      id: 12,
      name: 'Zebra Fakey McAlso Wine',
      year: 1997,
    },
    {
      id: 1337,
      name: 'Georg Beuer Spätburgunder Rosé Rheingau',
      year: 2015,
    },
    {
      id: 1339,
      name: 'Messerschmidt Fakey McWine',
      year: 2015,
    },
    {
      id: 1338,
      name: 'Georg Beuer Spätburgunder Rosé Rheingau',
      year: 2014,
    },
  ],
};

function getGrapeID() {
  const urlPieces = window.location.href.split('/');
  return urlPieces[urlPieces.findIndex((el) => { return el === 'grape'; }) + 1];
}

class Grape extends Component {
  renderVintages = () => {
    if (grape.vintages.length > 0) {
      // rebuild array for display
      const vintages = [];
      for (let i = 0; i < grape.vintages.length; i++) {
        let wineIndex = vintages.findIndex((el) => {
          return el.name === grape.vintages[i].name;
        });
        if (wineIndex === -1) {
          wineIndex = vintages.length;
          vintages.push({
            name: grape.vintages[i].name,
            years: [],
          });
        }
        const wineLink = '/wine/'+grape.vintages[i].id;
        vintages[wineIndex].years.push({ wineLink, year: grape.vintages[i].year });
      }

      // order names
      vintages.sort((a, b) => {
        return a.name > b.name;
      });

      // order years
      for (let i = 0; i < vintages.length; i++) {
        vintages[i].years.sort((a, b) => {
          return a.year > b.year;
        });
      }

      return (
        <div className='Grape-vintages'>
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
    }
    return '';
  }

  render() {
    return (
      <div className="Grape">
        <Breadcrumbs
          grape={grape}
        />
        <h1 className="Grape-name">
          {grape.name}
        </h1>
        <div className="Grape-description">
          {grape.description}
        </div>
        {this.renderVintages()}
      </div>
    );
  }
}

export default Grape;
