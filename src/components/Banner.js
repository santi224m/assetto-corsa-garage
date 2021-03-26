import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {
    render() {
        return (
            <div className='banner'>
                <div className='ui container'>
                    <h3 className='banner-title'>Help other sim racers by contributing to the site</h3>
                    <div className='banner-title-underline'></div>
                    <div className='banner-content'>
                        <div className='banner-text'>
                            <ol>
                                <li>Sign in with your google account</li>
                                <li>Check that the mod you want to add isn't already in the website</li>
                                <li>Click the "Add Mod" button in the navigation menu</li>
                                <li>Click the "Add New Mod" button at the top of the page</li>
                                <li>Fill out the form and click next</li>
                                <li>Check that the information in the preview is correct and click the "Post Mod" button</li>
                            </ol>
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

export default Banner;
