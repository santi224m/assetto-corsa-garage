import React from 'react';

const ShifterOption = ({ props, value }) => {
    return (
        <div
            className={`item ${props.selectedFilters.selectedShifter === value ? 'active selected' : ''}`}
            data-value={value}
            onClick={() => props.selectShifter(value)}
            children={value || 'All Shifters'}
        />
    );
};

export default ShifterOption;
