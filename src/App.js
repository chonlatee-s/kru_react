import React from 'react';
import Menu from './Menu';
import Bar from './Bar';
import Home from './Home';
import How from './How';
import Magic from './Magic';
import Professional from './Professional';
import Tutorial from './Tutorial';
import File from './File';
import Guidelines from './Guidelines';
import Test from './Test';
import Exam from './Exam';
import Result from './Result';
import AboutMe from './AboutMe';
import Regis from './Regis';
import Coffee from './Coffee';
import Policy from './Policy';
import Error404 from './Error404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// redux
import TestRedux from './TestRedux';
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'
import TestAdd from './TestAdd';
import MobileFacebook from './MobileFacebook';

function App() {
  const store = createStore(reducer)
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Menu />
        <div className="container-fluid bg">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/how" component={How} />
            {/* <Route path="/competition" component={Competition} /> */}
            <Route path="/magic" component={Magic} />

            <Route path="/professional" component={Professional} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/file" component={File} />
            <Route path="/guidelines" component={Guidelines} />
            <Route path="/test" component={Test} />
            <Route path="/exam/:topic" component={Exam} />
            <Route path="/result" component={Result} />
            <Route path="/me" component={AboutMe} />
            <Route path="/regis" component={Regis} />
            <Route path="/coffee" component={Coffee} />
            <Route path="/testAdd" component={TestAdd} />

            <Route path="/TestRedux" component={TestRedux} />
            <Route path="/Policy" component={Policy} />
            <Route path="/MobileFacebook" component={MobileFacebook} />
            <Route component={Error404} />
          </Switch>
        </div>
        <Bar />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
