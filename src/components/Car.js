import React from 'react';

const Car = ({ brand, model, img, link, transmission, year, wikiLink, carClass }) => {
  return (
    <div className='mod-card'>
      <img src={img} alt={model} />
      <div className='content'>
        <div className='meta'>{year}</div>
        <a href={link} className='header' target='_blank'>
          {brand}
        </a>
        <div className='meta'>{model}</div>
      </div>
      <div className='extra content text'>
        <span className='right'>{carClass}</span>
        <span>{transmission}</span>
      </div>
      <div className='extra content buttons'>
        <a href={wikiLink} target='_blank' className='btn-primary'>
          Learn More
        </a>
        <br />
        <a href={link} className='btn-secondary' target='_blank'>
          Go to Mod
        </a>
      </div>
    </div>
  );
};

export default Car;
