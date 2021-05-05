import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { filterSearch, signIn, signOut } from '../actions';
import history from '../history';

import HeaderLinksDesktop from './HeaderLinksDesktop';
import HeaderLinksMobile from './HeaderLinksMobile';

const Header = props => {
  const [dropDownClicked, setDropDownClicked] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  const ref = useRef();

  useEffect(() => {
    // Close filters dropdown if user clicks on window
    document.body.addEventListener('click', e => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }

      setDropDownClicked(false);
    });
  }, []);

  const onSearchSubmit = e => {
    // Redirect user to cars list page when they use search bar
    if (e.key === 'Enter') {
      if (window.location.pathname !== '/list') {
        history.push('/list');
      }
    }
  };

  return (
    <>
      <div ref={ref} id='navbar' className={`${showMobile ? 'nav-fixed' : ''}`}>
        <HeaderLinksDesktop
          props={props}
          dropDownClicked={dropDownClicked}
          setDropDownClicked={setDropDownClicked}
          onSearchSubmit={onSearchSubmit}
          showMobile={showMobile}
          setShowMobile={setShowMobile}
        />
      </div>
      <HeaderLinksMobile showMobile={showMobile} setShowMobile={setShowMobile} />
    </>
  );
};

const mapStateToProps = state => {
  return { selectedFilters: state.selectedFilters, user: state.user };
};

export default connect(mapStateToProps, { filterSearch, signIn, signOut })(Header);
