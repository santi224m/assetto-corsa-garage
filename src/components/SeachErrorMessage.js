import React from 'react';

const SearchErrorMessage = ({ carListLength }) => {
    if (carListLength > 0) {
        return null;
    }

    return (
        <div className='ui negative message'>
            <div className='header'>No cars found</div>
            <p>Try another search</p>
        </div>
    );
};

export default SearchErrorMessage;
