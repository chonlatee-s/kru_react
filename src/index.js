import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

// import AdSense from "react-adsense";
// import {Advertisement} from "semantic-ui-react";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Advertisement unit="leaderboard">
      <AdSense.Google
        client="ca-pub-5901161227057601"
        format=""
        slot="4780951832"
        style={{ display: "inline-block", height: 90, width: 500 }}
      />
    </Advertisement> */}
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
