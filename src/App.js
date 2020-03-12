import React from 'react';
import './App.css';
import Profile from './Profile';
import Resume from './Resume1';
import {BrowserRouter,Route,link} from 'react-router-dom';

let App=()=>{
  return (
    <BrowserRouter>
      <Route exact  path="/" component={Profile}>
        </Route>
      <Route exact path="/resume" component={Resume} />
      </BrowserRouter>
  )
}
export default App;
