import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './component/Navbar';
import Landing from './component/Landing';
import Login from './component/auth/Login';
import Register from './component/auth/Register';

import './App.css';

const App =()=> {
  return (
    <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component ={Landing} />
      <section className ="container">
        <Switch>
          <Route exact path="/register" component ={Register}/>
          <Route exact path="/login" component ={Login}/>
        </Switch>
      </section>
    </Fragment>
    </Router>

  );
}

export default App;
