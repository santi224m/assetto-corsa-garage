import React from 'react';
import SignIn from './SignIn';
import HeaderLink from './HeaderLink';
import history from '../history';

const toggleSidebar = (showMobile, setShowMobile) => {
  window.scrollTo(0, 0);
  setShowMobile(!showMobile);
};

const HeaderLinksDesktop = ({
  props,
  dropDownClicked,
  setDropDownClicked,
  onSearchSubmit,
  showMobile,
  setShowMobile
}) => {
  return (
    <div className='container'>
      <div className='left'>
        <img
          id='asg-logo'
          src='/img/asg-logo.png'
          alt='Assetto Corsa Garage'
          onClick={() => history.push('/')}
        />
        <HeaderLink path='/' text='Home' />
        <HeaderLink path='/list' text='All Cars' />
        <div onClick={() => setDropDownClicked(!dropDownClicked)} className='dropdown'>
          <span className='dropdownLink'>
            Filters
            <img src='/img/icons/arrow.svg' className={`${dropDownClicked ? 'flipped' : ''}`} />
          </span>
          <div className={`menu transition ${dropDownClicked ? 'visible' : 'invisible'}`}>
            <HeaderLink path='/filters/brands' text='Brands' />
            <HeaderLink path='/filters/class' text='Class' />
            <HeaderLink path='/filters/decades' text='Decades' />
            <HeaderLink path='/filters/shifters' text='Shifters' />
          </div>
        </div>
      </div>
      <div className='right'>
        <SignIn />
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Search'
            value={props.selectedFilters.searchTerm}
            onChange={e => props.filterSearch(e.target.value)}
            onKeyPress={e => onSearchSubmit(e)}
          />
          <img id='search-btn' src='img/icons/search.svg' alt='Search' />
        </div>
      </div>
      <div
        className={`hamburger-menu ${showMobile ? 'change' : ''}`}
        onClick={() => toggleSidebar(showMobile, setShowMobile)}
      >
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
    </div>
  );
};

export default HeaderLinksDesktop;
