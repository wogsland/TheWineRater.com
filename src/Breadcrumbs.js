import React, { Component } from 'react';
import './Breadcrumbs.css';

class Breadcrumbs extends Component {
  appellations = () => {
    if (typeof this.props.appellation !== 'undefined') {
      const appellationLink = '/appellation/'+this.props.appellation.id;
      const thisAppellation = typeof this.props.winery !== 'undefined' ?
      (<font className="Breadcrumb-link">
        <a href={appellationLink}>{this.props.appellation.name}</a> >
      </font>) : this.props.appellation.name;
      return (
        <font>
          {this.props.appellation.superAppellations.map((app, i) => {
            const appellationLink = '/appellation/'+app.id;
            return (
              <font key={i} className="Breadcrumb-link">
                <a href={appellationLink}>{app.name}</a> >
              </font>
            );
          })}
          {thisAppellation}
        </font>
      );
    } else {
      return '';
    }
  }

  grape = () => {
    if (typeof this.props.grape !== 'undefined') {
      return this.props.grape.name;
    } else {
      return '';
    }
  }

  winery = () => {
    if (typeof this.props.wineName !== 'undefined') {
      const wineryLink = '/winery/'+this.props.winery.id;
      return (
        <font className="Breadcrumb-link">
          <a href={wineryLink}>{this.props.winery.name}</a> >
        </font>
      );
    } else if (typeof this.props.winery !== 'undefined'){
      return this.props.winery.name;
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className="Breadcrumbs">
        <font className="Breadcrumb-link">
          <a href="/">TheWineRater</a> >
        </font>
        {
          typeof this.props.grape !== 'undefined' ?
          <font className="Breadcrumb-link">
            <a href="/grapes">Grapes</a> >
          </font>
          : ''
        }
        {this.appellations()}
        {this.grape()}
        {this.winery()}
        {typeof this.props.wineName !== 'undefined' ? this.props.wineName : ''}
      </div>
    );
  }
}

export default Breadcrumbs;
