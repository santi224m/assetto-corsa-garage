import React from 'react';

const DecadeOption = ({ props, value }) => {
    return (
        <div
            key={value + 's'}
            className={`item ${props.selectedFilters.selectedDecade === value ? 'active selected' : ''}`}
            data-value={value + 's'}
            onClick={() => props.selectDecade(value)}
            children={value ? value + 's' : 'All Decades'}
        />
    );
};

export default DecadeOption;
