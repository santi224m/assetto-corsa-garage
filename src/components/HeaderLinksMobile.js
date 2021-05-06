import React from 'react';
import { Link } from 'react-router-dom';

const toggleSidebar = (showMobile, setShowMobile) => {
  window.scrollTo(0, 0);
  setShowMobile(!showMobile);
};

const HeaderLinksMobile = ({ showMobile, setShowMobile }) => {
  const MobileLink = ({ path, text }) => {
    return (
      <Link onClick={() => toggleSidebar(showMobile, setShowMobile)} to={path}>
        {text}
      </Link>
    );
  };

  return (
    <div className='sidebar'>
      {showMobile && (
        <div className='sidebar-links'>
          <MobileLink path='/' text='Home' />
          <MobileLink path='/list' text='All Cars' />
          <div className='mobile-nav-header'>Filters</div>
          <MobileLink path='/filters/brands' text='Brands' />
          <MobileLink path='/filters/class' text='Class' />
          <MobileLink path='/filters/decades' text='Decades' />
          <MobileLink path='/filters/shifters' text='Shifters' />
        </div>
      )}
    </div>
  );
};

export default HeaderLinksMobile;
