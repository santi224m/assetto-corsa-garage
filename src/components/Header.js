import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Header = () => {
    const [dropDownClicked, setDropDownClicked] = useState(false);

    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', e => {
            if(ref.current && ref.current.contains(e.target)) {
                return;
            }

            setDropDownClicked(false);
        });
    }, [])
    
    return (
        <div ref={ref} className="ui menu secondary pointing">
            <Link to="/" className="item">Assetto Corsa Garage</Link>
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
                        <input type="text" className="prompt" placeholder="Search" />
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
            </div>

        </div>
    );
}

export default Header;