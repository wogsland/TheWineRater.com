import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  copyrightYears = () => {
    if (this.props.lastChange === this.props.firstChange) {
      return this.props.lastChange;
    } else {
      return this.props.firstChange+' - '+this.props.lastChange;
    }
  }

  render() {
    return (
      <div className="Footer">
        <hr />
        <p className="copyright">&copy; Copyright {this.copyrightYears()} TheWineRater.com</p>
      </div>
    );
  }
}

export default Footer;
