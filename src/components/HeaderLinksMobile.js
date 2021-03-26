import React from 'react';
import { Link } from 'react-router-dom';

const toggleSidebar = () => {
    window.scrollTo(0, 0);
    document.body.classList.toggle('show-sidebar');
    document.body.classList.toggle('body-no-padding-top');
};

const MobileLink = ({ path, text }) => {
    return (
        <Link onClick={() => toggleSidebar()} className='item' to={path}>
            {text}
        </Link>
    );
};

const HeaderLinksMobile = () => {
    return (
        <div className='sidebar'>
            <i className='sidebar icon' onClick={() => toggleSidebar()}></i>
            <div className='sidebar-links'>
                <div className='icon close' onClick={() => document.body.classList.toggle('show-sidebar')} />
                <MobileLink path='/' text='Home' />
                <MobileLink path='/list' text='All Cars' />
                <div className='ui header'>Filters</div>
                <MobileLink path='/filters/brands' text='Brands' />
                <MobileLink path='/filters/class' text='Class' />
                <MobileLink path='/filters/decades' text='Decades' />
                <MobileLink path='/filters/shifters' text='Shifters' />
            </div>
        </div>
    );
};

export default HeaderLinksMobile;
