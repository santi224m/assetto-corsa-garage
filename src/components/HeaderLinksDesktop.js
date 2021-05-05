import React from 'react';
import SignIn from './SignIn';
import HeaderLink from './HeaderLink';

const HeaderLinksDesktop = ({ props, dropDownClicked, setDropDownClicked, onSearchSubmit }) => {
  return (
    <div className='container'>
      <div className='left'>
        <img id='asg-logo' src='/img/asg-logo.png' alt='Assetto Corsa Garage' />
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
    </div>
  );
};

export default HeaderLinksDesktop;
