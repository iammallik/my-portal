import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../App.css';
import AppLogo from './AppLogo';
import Articles from './Articles';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2>Welcome to React!</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Articles'}>Articles</Link></li>
               </ul>
               <hr />

               <Switch>
                  <Route exact path='/' component={AppLogo} />
                  <Route exact path='/Articles' component={Articles}/>
               </Switch>
            </div>
         </Router>
      );
   }
}

export default App;