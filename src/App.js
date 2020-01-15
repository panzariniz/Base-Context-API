import React from 'react';
import { Router } from 'react-router-dom';

import 'styles/index.scss';
import Routes from './routes';
import history from './services/history';
import State from './context';

function App() {
  return (
    <State>
      <Router history={history}>
        <Routes />
      </Router>
    </State>
  );
}

export default App;
