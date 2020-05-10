import React from 'react';
import Menu from './Menu';
import Bar from './Bar';
import Home from './Home';
import How from './How';
import Magic from './Magic';
import Competition from './Competition';
import Professional from './Professional';
import Tutorial from './Tutorial';
import File from './File';
import Guidelines from './Guidelines';
import Test from './Test';
import Exam from './Exam';
import Error404 from './Error404';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <div className="container-fluid bg">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/how" component={How} />
          <Route path="/competition" component={Competition} />
          <Route path="/magic" component={Magic} />

          <Route path="/professional" component={Professional} />
          <Route path="/tutorial" component={Tutorial} />
          <Route path="/file" component={File} />
          <Route path="/guidelines" component={Guidelines} />
          <Route path="/test" component={Test} />
          <Route path="/exam/:topic" component={Exam} />
          <Route component={Error404} />
        </Switch>
      </div>
      <Bar/>
    </BrowserRouter>
  );
}

export default App;
