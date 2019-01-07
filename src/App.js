import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/index.component';
import 'semantic-ui-css/semantic.min.css'
import Login from './components/login'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
 
  render() {
    return (
      <div className="container">
            <Switch>
              <Route exact  path='/login' component={ Login } />
              <Route exact  path='/' component={ Login } />
              <Route path='/index' component={ Index } />
          </Switch>
      </div>
    );
  }
}

export default App;
