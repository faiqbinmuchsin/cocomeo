import React from 'react';
import './banner.css';

const Banner = ({banner}) => (
    <div className="banner">
        {banner.map((item)=>(
            <img src={item.img_url} key={item.id} alt={item.alt} />
        ))}
    </div>
);

export default Banner;