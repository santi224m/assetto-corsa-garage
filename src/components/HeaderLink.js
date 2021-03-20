import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = ({ path, className, text }) => {
    return (
        <Link to={path} className={className}>
            {text}
        </Link>
    );
};

export default HeaderLink;
