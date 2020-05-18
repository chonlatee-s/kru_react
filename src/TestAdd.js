import React, { Component } from 'react'
import AdSense from 'react-adsense';

class Coffee extends Component {
    render() {
        return (

                <div className="boxMagic">
                    <AdSense.Google
                        client='pub-5901161227057601'
                        slot='4780951832'
                        style={{ width: 500, height: 300, float: 'left' }}
                        format=''
                    />
                </div>
        );
    }
}
export default Coffee;
