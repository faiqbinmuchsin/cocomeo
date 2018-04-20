import React from 'react';
import Slider from 'react-slick';

import './slick-widget.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 3
};


const SlickWidget = ({slick}) => (
    <div className="slick_widget">
        <div>
            <Slider {...settings}>
                {slick.map((item)=>(
                    <div className="slick__item" key={item.id}>
                        <img className="slick__image" src={item.img_url} alt={item.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
);

export default SlickWidget;