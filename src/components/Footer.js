import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    scrollTop() {
        window.scrollTo(0, 0);
    }

    animatedScrollTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    render() {
        return (
            <div className="ui inverted vertical footer segment" id="footer">
                <div className="ui container">
                    <div className="footer-links">
                    <Link to="/" className="item" onClick={() => this.scrollTop()}>Home</Link>
                    <Link to="/list" className="item" onClick={() => this.scrollTop()}>All Cars</Link>
                    <a className="item disabled">My Portfolio</a>
                    </div>
                    <a className="ui right floated inverted scrollUpButton" onClick={() => this.animatedScrollTop()}>↑</a>
                </div>
            </div>
        );
    }
}

export default Footer;