import React from 'react';
import {Link} from 'react-router-dom';

const Info = () =>{
  return(
    <div className = "info">
      <div className="info__left">

      </div>
      <div className="info__right">
        <ul>
          <li className = "fact">In 2019, IPL generated ₹2,000 crore in ad revenue</li>
          <li className = "fact">In 2010, IPL became the first sporting event in the world to be broadcast live on YouTube</li>
          <li className = "fact">According to BCCI, the 2015 IPL season contributed ₹11.5 billion to the GDP of Indian Economy</li>
          <li className = "fact">In 2016, IPL became the world's most attended league</li>
          <li className = "fact" style = {{listStyle: 'none', display: 'flex', justifyContent: 'space-around'}}><Link to = "/stats">Check IPL Stats</Link> <Link to = "/trivia">Check IPL Trivia</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Info;
