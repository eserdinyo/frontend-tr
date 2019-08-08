import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';

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
