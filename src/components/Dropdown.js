import React from 'react';

const Dropdown = ({ isDropdownOpen, onClick, selectedValue, renderOptions }) => {
    return (
        <div className={`ui selection dropdown ${isDropdownOpen ? 'active visible' : ''}`} onClick={onClick}>
            <input type="hidden" name="brand"/>
            <i className="dropdown icon"></i>
            <div className={`${selectedValue ? '' : 'default'} text`}>{selectedValue ? selectedValue : 'Brand'}</div>
            <div className={`menu transition ${isDropdownOpen ? 'visible' : 'hidden'}`}>
                {renderOptions}
            </div>
        </div>
    );
}

export default Dropdown;