import React, { Component } from 'react';
import './Breadcrumbs.css';

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="Breadcrumbs">
        <a href="/">TheWineRater</a> >
        <a href="/">Deutschland</a> >
        <a href="/">{this.props.appellation}</a> >
        <a href="/">{this.props.wineryName}</a> >
        {this.props.wineName}
      </div>
    );
  }
}

export default Breadcrumbs;
