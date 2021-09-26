import React from 'react';
import AdSense from "react-adsense";

function Ads() {
    return (
        <AdSense.Google
            client="ca-pub-5901161227057601"
            slot="4780951832"
            style={{ width: 500, height: 100, float: 'left' }}
        />
    );
}

export default Ads;

