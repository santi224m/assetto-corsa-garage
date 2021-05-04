import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = ({ path, className, text }) => {
  return (
    <Link to={path} className={className} onClick={() => window.scrollTo(0, 0)}>
      {text}
    </Link>
  );
};

export default HeaderLink;
