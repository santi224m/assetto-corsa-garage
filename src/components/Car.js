import React from 'react';

const Car = ({ brand, model, img, link, transmission, year, wikiLink }) => {
    return (
        <div className='ui card'>
            <div className='image'>
                <img src={img} alt={model} />
            </div>
            <div className='content'>
                <a href={link} className='header center aligned' target='_blank'>
                    {brand}
                </a>
                <div className='meta center aligned'>{model}</div>
            </div>
            <div className='extra content'>
                <span className='right floated'>{transmission}</span>
                <span>{year}</span>
            </div>
            <div className='extra content'>
                <a href={wikiLink} target='_blank' className='ui basic black button fluid'>
                    Learn More
                </a>
                <br />
                <a href={link} className='ui button fluid green' target='_blank'>
                    Go to Mod
                </a>
            </div>
        </div>
    );
};

export default Car;
