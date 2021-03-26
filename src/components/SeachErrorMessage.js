import React from 'react';

const SearchErrorMessage = ({ carListLength }) => {
    if (carListLength > 0) {
        return null;
    }

    return (
        <div className='ui negative message'>
            <div className='header'>No cars found</div>
            <p>Try changing your filters</p>
        </div>
    );
};

export default SearchErrorMessage;
