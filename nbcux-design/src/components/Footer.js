import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      	<div className="content-wrapper">
          <h3 className="footer__headline">NBCUX Lab Design Test | May 11, 2018</h3>
          <p className="footer__text">Git repo found at <a href="https://github.com/cooperhu/front-end-design-project" target="_blank" rel="noopener noreferrer">github.com/cooperhu/front-end-design-project</a></p>
        </div>
      </footer>
    );
  }
}

export default Footer;