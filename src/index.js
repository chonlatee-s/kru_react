import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Ads from './Ads';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Ads />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
