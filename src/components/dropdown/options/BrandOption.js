import React from 'react';

const BrandOption = ({ props, brand }) => {
    return (
        <div
            className={`item ${props.selectedFilters.selectedBrand === brand.brandName ? 'active selected' : ''}`}
            data-value={brand.brandName}
            onClick={() => props.selectBrand(brand.brandName)}
            children={brand.brandName}
        />
    );
};

export default BrandOption;
