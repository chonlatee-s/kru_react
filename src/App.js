import React from 'react';
import Home from './Home';
import How from './How';
import Error404 from './Error404';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/how" component={Home} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
