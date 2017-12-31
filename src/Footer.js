import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  copyrightYears = () => {
    if (typeof this.props.lastChange === 'undefined') {
      return 2018
    } else if (this.props.lastChange === this.props.firstChange) {
      return this.props.lastChange;
    }
    return this.props.firstChange+' - '+this.props.lastChange;
  }

  render() {
    return (
      <div className="Footer">
        <hr />
        <p className="copyright">&copy; Copyright {this.copyrightYears()} TheWineRater.com</p>
        <p className="copyright">
          Checkout the <a
            href="https://github.com/wogsland/TheWineRater.com"
            target="_blank"
            rel="noopener noreferrer"
          >code</a> on Github.
        </p>
      </div>
    );
  }
}

export default Footer;
