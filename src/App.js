import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Index></Index>
      </div>
    );
  }
}

export default App;
