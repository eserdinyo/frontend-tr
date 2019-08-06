import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Home from '../pages/Home';

const AppRouter = () => {


  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
