import React from 'react';
import { Link } from 'react-router-dom';

class BannerWithButton extends React.Component {
    render() {
        return (
            <div className='banner bwb'>
                <div className='ui container'>
                    <h3 className='banner-title'>we would appreciate it if you could help us add mods</h3>
                    <div className='banner-wbtn-title-underline'></div>
                    <div className='banner-content'>
                        <div className='banner-text'>
                            <ol>
                                <li>Check that the mod you want to add isn't already in the website</li>
                                <li>Click on the "Add New Mod" button below</li>
                                <li>Fill out a form with the mods information</li>
                                <li>Check that the information in the preview is correct and click the "Post Mod" button</li>
                            </ol>
                            <Link to='/newmod/form' className='ui button secondary-color'>
                                <span>Add New Mod</span>
                                <i style={{ marginLeft: '15px', opacity: '1' }} className='cloud upload icon'></i>
                            </Link>
                        </div>
                        <div className='banner-video'>
                            <div id='player'>
                                {/* <iframe
                                    width='345'
                                    height='190'
                                    src='https://www.youtube.com/embed/FhasLd3pYYU'
                                    title='YouTube video player'
                                    frameBorder='0'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                ></iframe> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BannerWithButton;
