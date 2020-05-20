import React,{Component} from 'react';
import AdSense from 'react-adsense';

class TestAdd extends Component {
    render() {
        return (
            <div className="boxMagic">
                <AdSense.Google
                    client='pub-5901161227057601'
                    slot='4780951832'
                    style={{ display: 'block' }}
                    layout='in-article'
                    format='fluid'
                />
            </div>
        );
    }
}
export default TestAdd;
