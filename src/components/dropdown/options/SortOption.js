import React from 'react';

const SortOption = ({ props, value, displayText }) => {
    // Update selected sort option
    const onSelectedUpdate = newOption => {
        props.selectSort(newOption);
        props.updateCurrentPage(1);
        window.scrollTo(0, 0);
    };

    return (
        <div
            className={`item ${props.currentSort.sortName === value ? 'active selected' : ''}`}
            data-value={value}
            onClick={() => onSelectedUpdate(value)}
            children={displayText}
        />
    );
};

export default SortOption;
