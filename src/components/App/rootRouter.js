import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../../utils/constants/routes';
import Main from '../../pages/Main';
import About from '../../pages/About';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.ABOUT}>
        <About />
      </Route>
      <Route path={routes.ROOT}>
        <Main />
      </Route>
    </Switch>
  </BrowserRouter>
);
