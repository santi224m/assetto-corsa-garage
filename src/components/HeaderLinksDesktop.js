import React, { useState } from 'react';
import SignIn from './SignIn';
import HeaderLink from './HeaderLink';

const HeaderLinksDesktop = ({ props, dropDownClicked, setDropDownClicked, onSearchSubmit }) => {
    return (
        <div className='ui container'>
            <HeaderLink path='/' className='item header' text='Assetto Corsa Garage' />
            <div className='right menu'>
                <HeaderLink path='/' className='item' text='Home' />
                <HeaderLink path='/list' className='item' text='All Cars' />
                <div
                    onClick={() => setDropDownClicked(!dropDownClicked)}
                    className={`ui dropdown link item ${dropDownClicked ? 'active visible' : ''}`}
                >
                    <span className='text'>Filters</span>
                    <i className='dropdown icon'></i>
                    <div className={`menu transition ${dropDownClicked ? 'visible' : ''}`}>
                        <HeaderLink path='/filters/brands' className='item' text='Brands' />
                        <HeaderLink path='/filters/class' className='item' text='Class' />
                        <HeaderLink path='/filters/decades' className='item' text='Decades' />
                        <HeaderLink path='/filters/shifters' className='item' text='Shifters' />
                    </div>
                </div>
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
                <SignIn />
            </div>
        </div>
    );
};

export default HeaderLinksDesktop;
