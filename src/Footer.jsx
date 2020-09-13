import React from 'react';
import dream11 from './images/Dream11.png';
import star from './images/Star.jpg';
import hotstar from './images/Hotstar.png'
import altroz from './images/Altroz.png'
import paytm from './images/Paytm.png';
import cred from './images/Cred.jpg';
import unacademy from './images/Unacademy.png';
import ceat from './images/Ceat.png';

const Footer = () =>{
  return(
    <div className="sponsors">
      <div className = "sponsors__upper">
        <div className="sponsors__card">
          <p>Title Sponsors</p>
          <div className = "sponsor-logo" style={{backgroundImage: `url(${dream11})`}}></div>
        </div>
      </div>
      <div className = "sponsors__lower">

        <div className="sponsors__card">
          <p>Official Broadcasters</p>
          <div className = "sponsor-logo" style={{backgroundImage: `url(${star})`}}></div>
        </div>

        <div className="sponsors__card">
          <p>Digital Streaming Partner</p>
          <div className = "sponsor-logo" style={{backgroundImage: `url(${hotstar})`}}></div>
        </div>

        <div className="sponsors__card">
          <p>Official Partners</p>
          <div className="card__wrapper">
            <div className = "sponsor-logo" style={{backgroundImage: `url(${altroz})`}}></div>
            <div className = "sponsor-logo" style={{backgroundImage: `url(${cred})`, transform: 'scale(0.38)'}}></div>
            <div className = "sponsor-logo" style={{backgroundImage: `url(${unacademy})`}}></div>
          </div>
        </div>

        <div className="sponsors__card">
          <p>Umpire Partner</p>
          <div className = "sponsor-logo" style={{backgroundImage: `url(${paytm})`}}></div>
        </div>

        <div className="sponsors__card">
          <p>Strategic Timeout Partner</p>
          <div className = "sponsor-logo" style={{backgroundImage: `url(${ceat})`}}></div>
        </div>

      </div>
    </div>
  )
}

export default Footer;
