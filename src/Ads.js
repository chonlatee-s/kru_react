import React from 'react';
import AdSense from "react-adsense";
// import { Advertisement } from "semantic-ui-react";

function Ads() {
    return (

        // <Advertisement unit="leaderboard">
            <AdSense.Google
                client="ca-pub-5901161227057601"
                slot="4780951832"
                // format=''
                // style={{ display: "inline-block", height: 90, width: 500 }}
            />
        // </Advertisement>

    );
}

export default Ads;

