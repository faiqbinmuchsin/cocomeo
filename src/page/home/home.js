import React, {Component} from 'react';
import Banner from '../../component/banner';
import SlickWidget from '../../component/slick-widget';
import Thumbnail from '../../component/thumbnail';

class Home extends Component{
    render(){
        return(
            <div className="home">
                <Banner />
                <SlickWidget />
                <Thumbnail />
            </div>
        );
    }
}

export default Home;