import React from 'react';
import Nav from './Nav';
import Barchart from './Barchart';
import Home from './Home';
import Facts from './Facts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () =>{
  return(
    <>
      <Router>
        <Nav/>
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path="/stats" component = {Barchart} />
          <Route path="/trivia" component = {Facts} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
