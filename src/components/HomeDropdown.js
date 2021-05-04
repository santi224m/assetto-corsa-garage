import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import {
  renderBrandsOptions,
  renderClassOptions,
  renderShifterOptions
} from '../modules/renderDropdownOptions';

import Dropdown from './dropdown/Dropdown';

class HomeDropdown extends React.Component {
  componentDidMount() {
    if (this.props.brands.length === 0) {
      this.props.fetchBrands();
    }
  }

  render() {
    return (
      <div className='ui form'>
        <div className='three wide field'>
          <label>Brand</label>
          <Dropdown inputName='Any' selectedValue={this.props.selectedFilters.selectedBrand}>
            {renderBrandsOptions(this.props)}
          </Dropdown>
        </div>

        <div className='three wide field'>
          <label>Shifter</label>
          <Dropdown inputName='Any' selectedValue={this.props.selectedFilters.selectedShifter}>
            {renderShifterOptions(this.props)}
          </Dropdown>
        </div>

        <div className='three wide field'>
          <label>Class</label>
          <Dropdown inputName='Any' selectedValue={this.props.selectedFilters.selectedClass}>
            {renderClassOptions(this.props)}
          </Dropdown>
        </div>

        <div className='three wide field'>
          <Link to='/list' className='ui green button' onClick={() => window.scrollTo(0, 0)}>
            Search
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filterDropdowns: state.filterDropdowns,
    selectedFilters: state.selectedFilters,
    brands: Object.values(state.brands)
  };
};

export default connect(mapStateToProps, actions)(HomeDropdown);
