import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const Nav = () =>{
  return (
      <nav>
        <div id = "nav-left">
          <Link to = "/"><h1 style={{margin: 0}}>IPL Stats</h1></Link>
        </div>
        <div id = "nav-right">
          <ul>
            <li><Link to = "/stats">Stats</Link></li>
            <li><Link to = "/trivia">Trivia</Link></li>
          </ul>
        </div>
      </nav>
  )
}

export default Nav;
