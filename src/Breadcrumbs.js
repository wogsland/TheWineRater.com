import React, { Component } from 'react';
import './Breadcrumbs.css';

class Breadcrumbs extends Component {
  winery = () => {
    const wineryLink = '/winery/'+this.props.winery.id;
    if (typeof this.props.wineName !== 'undefined') {
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

  appellations = () => {
    const appellationLink = '/appellation/'+this.props.appellation.id;
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
        <font className="Breadcrumb-link">
          <a href={appellationLink}>{this.props.appellation.name}</a> >
        </font>
      </font>
    );
  }

  render() {
    return (
      <div className="Breadcrumbs">
        <font className="Breadcrumb-link">
          <a href="/">TheWineRater</a> >
        </font>
        {this.appellations()}
        {this.winery()}
        {typeof this.props.wineName !== 'undefined' ? this.props.wineName : ''}
      </div>
    );
  }
}

export default Breadcrumbs;
