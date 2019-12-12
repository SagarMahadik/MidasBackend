import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './component/Navbar';
import Landing from './component/Landing';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import Alert from './component/layout/Alert';
import PrivateRoute from './component/routing/PrivateRoute';
import PatientsLandingPage from './component/midasComponents/midasPatientComponents/PatientsLandingPage';
import DoctorsLandingPage from './component/midasComponents/midasDoctorComponents/DoctorsLandingPage';
import AdminLandingPage from './component/midasComponents/midasAdminComponents/AdminLandingPage';

import {loadUser} from './action/auth';
import setAuthToken from './utils/setAuthToken';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import Dashboard from './component/dashboard/Dashboard';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App =()=> {
  useEffect(()=>{
    store.dispatch(loadUser())
  },[]);

  return (
    <Provider store={store}>
    <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component ={Landing} />
      <section className ="container">
        <Alert/>
        <Switch>
          <Route exact path="/register" component ={Register}/>
          <Route exact path="/login" component ={Login}/>
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          <PrivateRoute exact path="/patientsLandingPage" component={PatientsLandingPage}/>
          <PrivateRoute exact path="/doctorsLandingPage" component={DoctorsLandingPage}/>
          <PrivateRoute exact path="/adminLandingPage" component ={AdminLandingPage}/>
        </Switch>
      </section>
    </Fragment>
    </Router>      
    </Provider>
  );
}

export default App;
