import React from 'react';
import { connect } from 'react-redux';
import { fetchCars, updateTotalItems, updatePages, updateCurrentPage, updateStartIndex, updateEndIndex, updateCarsLength } from '../actions';

import FilterForm from './FilterForm';
import SortDropdown from './dropdown/SortDropdown';
import CarsList from './CarsList';
import SearchErrorMessage from './SeachErrorMessage';
import Pagination from './Pagination';

class ShowList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.cars.length === 0) {
            this.props.fetchCars();
        }

        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        // Set current page back to page 1
        this.props.updateCurrentPage(1);
        this.props.updateStartIndex(0);
        this.props.updateEndIndex(11);
    }
    render() {
        return (
            <div className='carsList-grid'>
                <FilterForm onClick={this.filterCars} />
                <SortDropdown />
                <CarsList props={this.props} filteredCarsArr={this.filteredCarsArr} />
                <SearchErrorMessage carListLength={this.props.pagination.carsLength} />
                <Pagination />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cars: Object.values(state.cars),
        brands: Object.values(state.brands),
        selectedFilters: state.selectedFilters,
        sortName: state.currentSort.sortName,
        pagination: state.pagination,
    };
};

export default connect(mapStateToProps, {
    fetchCars,
    updateTotalItems,
    updatePages,
    updateCurrentPage,
    updateStartIndex,
    updateEndIndex,
    updateCarsLength,
})(ShowList);
