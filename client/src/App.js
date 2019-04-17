import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './assets/App.css';
import Home from './pages/Home';
import Download from './pages/Download';
import Upload from './pages/Upload';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/upload' component={Upload}/>
          <Route path='/download' component={Download}/>
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
