import React, { Component } from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import logo from "./assets/icons/Logo.png"
import "./styles/fonts.css";
import "./comingSoonCard.css";
class comingSoonCard extends Component {
  render = () => {
    return (
      <div className="CScard">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="Logo"/>
          </div>
          <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/OguzAkkus" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>The Website Is Under Construction.</h1>
            <p>Website coming soon. This will be an area where I will publish my personal work. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:oguzakkuss@gmail.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>made by <a className="underlined" href="https://github.com/OguzAkkus" target="_blank" rel="noopener noreferrer">OguzcanAkkus</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com/OguzAkkus/NodeJs-React-web-app" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </div>
    );
  }
}

export default comingSoonCard;