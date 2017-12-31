import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  copyrightYears = () => {
    console.log(this.props.lastChange)
    if (typeof this.props.lastChange === 'undefined') {
      return 2018
    } else if (this.props.lastChange === this.props.firstChange) {
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
        <p className="copyright">
          Checkout the <a href="https://github.com/wogsland/TheWineRater.com" target="_blank">code</a> on Github.
        </p>
      </div>
    );
  }
}

export default Footer;
