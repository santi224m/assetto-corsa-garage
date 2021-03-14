import React from 'react';
import { connect } from 'react-redux';
import { fetchBrands, selectBrand, selectClass, selectDecade, selectShifter, resetFilters } from '../actions';
import { renderBrandsOptions, renderClassOptions, renderDecadesOptions, renderShifterOptions } from '../modules/renderDropdownOptions';

import Dropdown from './dropdown/Dropdown';

class FilterForm extends React.Component {
    componentDidMount() {
        if (this.props.brands.length === 0) {
            this.props.fetchBrands();
        }
    }

    componentWillUnmount() {
        // Reset values of selected filters
        this.props.resetFilters();
    }

    render() {
        return (
            <div className='ui form'>
                <div className='fields'>
                    <div className='field'>
                        <Dropdown inputName='Brand' selectedValue={this.props.selectedFilters.selectedBrand}>
                            {renderBrandsOptions(this.props)}
                        </Dropdown>
                    </div>

                    <div className='field'>
                        <Dropdown inputName='Class' selectedValue={this.props.selectedFilters.selectedClass}>
                            {renderClassOptions(this.props)}
                        </Dropdown>
                    </div>

                    <div className='field'>
                        <Dropdown inputName='Decade' selectedValue={this.props.selectedFilters.selectedDecade}>
                            {renderDecadesOptions(this.props)}
                        </Dropdown>
                    </div>

                    <div className='field'>
                        <Dropdown inputName='Shifter' selectedValue={this.props.selectedFilters.selectedShifter}>
                            {renderShifterOptions(this.props)}
                        </Dropdown>
                    </div>

                    <div className='field'>
                        <button className={`ui button red`} onClick={() => this.props.resetFilters()}>
                            Reset Filters
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { brands: Object.values(state.brands), selectedFilters: state.selectedFilters };
};

export default connect(mapStateToProps, {
    fetchBrands,
    selectBrand,
    selectClass,
    selectDecade,
    selectShifter,
    resetFilters,
})(FilterForm);
