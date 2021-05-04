import React from 'react';

const ClassOption = ({ props, value }) => {
  return (
    <div
      key={value}
      className={`item ${props.selectedFilters.selectedClass === value ? 'active selected' : ''}`}
      data-value={value}
      onClick={() => props.selectClass(value)}
      children={value || 'All Classes'}
    />
  );
};

export default ClassOption;
