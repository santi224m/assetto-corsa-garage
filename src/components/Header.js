import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterSearch } from '../actions';
import history from '../history';

const Header = (props) => {
    const [dropDownClicked, setDropDownClicked] = useState(false);

    const ref = useRef();

    useEffect(() => {
        // Close filters dropdown if user clicks on window
        document.body.addEventListener('click', e => {
            if(ref.current && ref.current.contains(e.target)) {
                return;
            }

            setDropDownClicked(false);
        });
    }, [])

    const onSearchSubmit = (e) => {
        // Redirect user to cars list page when they use search bar
        if(e.key === 'Enter') {
            if(window.location.pathname !== '/list') {
                history.push('/list');
            }
        }
    }

    // Only available on mobile
    const toggleSidebar = () => {
        window.scrollTo(0, 0);
        document.body.classList.toggle('show-sidebar');
    }
    
    return (
        <div ref={ref} className="ui large top menu pointing fixed secondary">
            <div className="ui container">
            <Link to="/" className="item header">Assetto Corsa Garage</Link>
            <div className="right menu">
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/list">All Cars</Link>
                <div onClick={() => setDropDownClicked(!dropDownClicked)} className={`ui dropdown link item ${dropDownClicked ? 'active visible' : ''}`}>
                    <span className="text">Filters</span>
                    <i className="dropdown icon"></i>
                    <div className={`menu transition ${dropDownClicked ? 'visible' : ''}`}>
                        <Link className="item" to="/filters/brands">Brands</Link>
                        <Link className="item" to="/filters/class">Class</Link>
                        <Link className="item" to="/filters/decades">Decades</Link>
                        <Link className="item" to="/filters/shifters">Shifters</Link>
                    </div>
                </div>
                <div className="ui search">
                    <div className="ui icon input">
                        <input type="text" className="prompt" placeholder="Search" value={props.selectedFilters.searchTerm} onChange={(e) => props.filterSearch(e.target.value)} onKeyPress={e => onSearchSubmit(e)} />
                        <i className="search icon" ></i>
                    </div>
                    <div className="results"></div>
                </div>
            </div>
            {/* This sidebar is only available on mobile */}
            <div className="sidebar">
                <i className="sidebar icon" onClick={() => toggleSidebar()}></i>
                <div className="sidebar-links">
                    <i className="close icon" onClick={() => document.body.classList.toggle('show-sidebar')}></i>
                    <Link onClick={() => toggleSidebar()} className="item" to="/">Home</Link>
                    <Link onClick={() => toggleSidebar()} className="item" to="/list">All Cars</Link>
                    <div className="ui header">Filters</div>
                    <Link onClick={() => toggleSidebar()} className="item" to="/filters/brands">Brands</Link>
                    <Link onClick={() => toggleSidebar()} className="item" to="/filters/class">Class</Link>
                    <Link onClick={() => toggleSidebar()} className="item" to="/filters/decades">Decades</Link>
                    <Link onClick={() => toggleSidebar()} className="item" to="/filters/shifters">Shifters</Link>
                </div>
            </div>
            </div>

        </div>
    );
}

const mapStateToProps = state => {
    return { selectedFilters: state.selectedFilters };
}

export default connect(mapStateToProps, { filterSearch })(Header);