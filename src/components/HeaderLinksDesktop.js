import React from 'react';
import SignIn from './SignIn';
import HeaderLink from './HeaderLink';

const HeaderLinksDesktop = ({ props, dropDownClicked, setDropDownClicked, onSearchSubmit }) => {
  return (
    <div className='ui container'>
      <HeaderLink path='/' className='asg-logo item header' text='Assetto Corsa Garage' />
      <HeaderLink path='/' className='item desktop-link' text='Home' />
      <HeaderLink path='/list' className='item desktop-link' text='All Cars' />
      <div
        onClick={() => setDropDownClicked(!dropDownClicked)}
        className={`desktop-link ui dropdown link item ${dropDownClicked ? 'active visible' : ''}`}
      >
        <span className='text'>Filters</span>
        <img src='/img/icons/DownArrow.svg' className='asg-icon down-arrow' />
        <div className={`menu transition ${dropDownClicked ? 'visible' : ''}`}>
          <HeaderLink path='/filters/brands' className='item asg' text='Brands' />
          <HeaderLink path='/filters/class' className='item asg' text='Class' />
          <HeaderLink path='/filters/decades' className='item asg' text='Decades' />
          <HeaderLink path='/filters/shifters' className='item asg' text='Shifters' />
        </div>
      </div>
      <div className='right menu'>
        <SignIn />
        <div className='ui search'>
          <div className='ui icon input'>
            <input
              type='text'
              className='prompt'
              placeholder='Search'
              value={props.selectedFilters.searchTerm}
              onChange={e => props.filterSearch(e.target.value)}
              onKeyPress={e => onSearchSubmit(e)}
            />
            <i className='search icon'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLinksDesktop;
