import React from 'react';
import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import { selectSort, updateCurrentPage } from '../../actions';
import { renderDropdownOptions } from '../../modules/renderDropdownOptions';

class SortDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.selectedOptionName = '';
  }

  // Convert redux state name to more readable named used for selectedValue in <Dropdown />
  updateSortName() {
    switch (this.props.currentSort.sortName) {
      case 'nameDown':
        return 'Brand Name (A-Z)';
      case 'nameUp':
        return 'Brand Name (Z-A)';
      case 'yearNew':
        return 'Year: Newest';
      case 'yearOld':
        return 'Year: Oldest';
      case 'dateAddedNew':
        return 'Date Added: Newest';
      case 'dateAddedOld':
        return 'Date Added: Oldest';
    }
  }

  render() {
    this.selectedOptionName = this.updateSortName();
    return (
      <div className='sort-dropdown'>
        <label>Sort By</label>
        <Dropdown inputName='Sort' selectedValue={this.selectedOptionName}>
          {renderDropdownOptions(this.props)}
        </Dropdown>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentSort: state.currentSort };
};

export default connect(mapStateToProps, { selectSort, updateCurrentPage })(SortDropdown);
