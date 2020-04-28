import React from 'react';
import './App.css';
import './Login.css'

import { BrowserRouter as Route, Switch } from 'react-router-dom'
import Login from './components/Login'



function App() {

  return (
    <div className='App'>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>




  );

}

export default App;
