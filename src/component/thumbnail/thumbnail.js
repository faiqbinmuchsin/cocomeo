import React from 'react';
import './thumbnail.css';

const items = [
    {id: "1", img_url: "cat-600-a.jpg", alt: "cat-a"},
    {id: "2", img_url: "cat-600-b.jpg", alt: "cat-a"}
];

const ThumbnailItem = items.map((item) => 
    <img src={`/cdn/${item.img_url}`} alt={item.alt} key={item.id} />
);

const Thumbnail = () => (
    <div className="thumbnail">{ThumbnailItem}</div>
);

export default Thumbnail;