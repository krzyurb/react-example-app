import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import routes from '../../utils/constants/routes';
import Hello from '../../components/Hello';

export default () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Hello />
      <Link to={routes.ABOUT}>About</Link>
    </header>
  </div>
);
