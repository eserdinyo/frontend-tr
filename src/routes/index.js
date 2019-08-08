import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Darkmode from 'darkmode-js';


import Header from "../components/Header";
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';

var options = {
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: false,  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

new Darkmode(options).showWidget();

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/istatistik" component={Statistics} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
