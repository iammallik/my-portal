import React, { Component } from 'react';
//import logo from '../logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../App.css';
import AppLogo from './AppLogo';
import Articles from './Articles';
import Resume from './Resume';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
            <h2>Welcome to React!</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Articles'}>Articles</Link></li>
                  <li><Link to={'/Resume'}>Resume</Link></li>
               </ul>
               <hr/>

               <Switch>
                  <Route exact path='/Articles' component={Articles}/>
                  <Route exact path='/Resume' component={Resume}/>
                  <Route path='/' exact={true} component={AppLogo} />
               </Switch>
            </div>
         </Router>
      );
   }
}

//<li><Link to={'/'}>Home</Link></li>
//<Route path='/' exact={true} component={AppLogo} />

export default App;
