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

const items = [
    {id: "1", img_url: "cat-450-a.jpg", alt: "cat-a"},
    {id: "2", img_url: "cat-450-b.jpg", alt: "cat-b"},
    {id: "3", img_url: "cat-450-c.jpg", alt: "cat-c"},
    {id: "4", img_url: "cat-450-d.jpg", alt: "cat-d"}
];

const SlickItem = items.map((item) => 
    <div className="slick__item" key={item.id}>
        <img className="slick__image" src={`/cdn/${item.img_url}`} alt={item.alt} />
    </div>
);

const SlickWidget = () => (
    <div className="slick_widget">
        <div>
            <Slider {...settings}>
                {SlickItem}
            </Slider>
        </div>
    </div>
);

export default SlickWidget;