import React from 'react';

const BrandOption = ({ props, brand }) => {
    return (
        <div
            className={`item ${props.selectedFilters.selectedBrand === brand.brand ? 'active selected' : ''}`}
            data-value={brand.brand}
            onClick={() => props.selectBrand(brand.brand)}
            children={brand.brand}
        />
    );
};

export default BrandOption;
