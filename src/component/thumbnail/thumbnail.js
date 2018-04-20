import React from 'react';
import './thumbnail.css';

const Thumbnail = ({thumbnail}) => (
    <div className="thumbnail">
        {thumbnail.map((item)=>(
            <img src={item.img_url} alt={item.alt} key={item.id} />
        ))}
    </div>
);

export default Thumbnail;