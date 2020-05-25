import React,{Component} from 'react';

class TestAdd extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    render() {
        return (
                <ins
                className="adsbygoogle"
                data-ad-client="ca-pub-5901161227057601"
                data-ad-slot="4780951832"
                style={{ display: "inline-block", height: 250, width: 300 }}
              />
        );
    }
}
export default TestAdd;