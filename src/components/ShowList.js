import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCars, updateTotalItems, updatePages, updateCurrentPage, updateStartIndex, updateEndIndex } from '../actions';

import FilterForm from './FilterForm';
import SortDropdown from './SortDropdown';
import Pagination from './Pagination';

class ShowList extends React.Component {
    constructor(props) {
        super(props);

        this.filteredCarsArr = [];
    }

    componentDidMount() {
        if(this.props.cars.length === 0) {
            this.props.fetchCars();
        }
    }

    componentDidUpdate() {
        if(this.props.pagination.totalItems !== this.filteredCarsArr.length) {
            const newCarAmount = this.filteredCarsArr.length;
            this.props.updateTotalItems(newCarAmount);
            this.props.updatePages(Math.ceil(newCarAmount / this.props.pagination.pageSize));
            this.props.updateCurrentPage(1);
        }
    }

    // Sort options used by sort dropdown
    sortByBrand = (a, b) => {
        if(a.brand < b.brand) {
            return -1;
        }
        if(a.brand > b.brand) {
            return 1;
        }
        return 0;
    }

    sortByYear = (a, b) => {
        if(a.year < b.year) {
            return -1;
        }
        if(a.year > b.year) {
            return 1;
        }
        return 0;
    }

    sortByDateAdded = (a, b) => {
        if(a.id < b.id) {
            return -1;
        }
        if(a.id > b.id) {
            return 1;
        }
        return 0;
    }


    renderCars() {
        this.filteredCarsArr = this.props.cars.filter(car => {

            // Looks for which filters are currently selected
            const brandIsSelected = this.props.selectedFilters.selectedBrand && this.props.selectedFilters.selectedBrand !== car.brand;
            const classIsSelected = this.props.selectedFilters.selectedClass && this.props.selectedFilters.selectedClass !== car.car_type;
            const decadeIsSelected = this.props.selectedFilters.selectedDecade && !((this.props.selectedFilters.selectedDecade + 10) - car.year < 10 && (this.props.selectedFilters.selectedDecade + 10) - car.year > 0);
            const shifterIsSelected = this.props.selectedFilters.selectedShifter && this.props.selectedFilters.selectedShifter !== car.transmission;
            const carSearchTerm = `${car.brand.toLowerCase()} ${car.model.toLowerCase()} ${car.link.toLowerCase()} ${car.year.toLowerCase()} ${car.transmission.toLowerCase()} ${car.car_type.toLowerCase()}`;
            const searchTermFilter = this.props.selectedFilters.searchTerm && !(carSearchTerm.includes(this.props.selectedFilters.searchTerm.toLowerCase()));

            if(!(brandIsSelected || classIsSelected || decadeIsSelected || shifterIsSelected || searchTermFilter)) {
                return car;
            } 
        }).sort((a, b) => {
            if(this.props.sortName === 'nameDown') {
                return this.sortByBrand(a, b);
            } else if(this.props.sortName === 'nameUp') {
                return this.sortByBrand(b, a);
            } else if(this.props.sortName === 'yearOld') {
                return this.sortByYear(a, b);
            } else if(this.props.sortName === 'yearNew') {
                return this.sortByYear(b, a);   
            } else if(this.props.sortName === 'dateAddedOld') {
                return this.sortByDateAdded(a, b);
            } else if(this.props.sortName === 'dateAddedNew') {
                return this.sortByDateAdded(b, a);
            }
        })
        
        return this.filteredCarsArr.map(car => {
   
            const paginationStartIndex = this.props.pagination.startIndex;
            const paginationEndIndex = this.props.pagination.endIndex;

            if(this.filteredCarsArr && (this.filteredCarsArr.indexOf(car) < paginationStartIndex || this.filteredCarsArr.indexOf(car) > paginationEndIndex)) {
                return;
            }

            // Create search link for wikipedia
            const baseWikiURL = 'https://en.wikipedia.org/wiki/';
            const carToPathName = `${car.brand} ${car.model}`.replace(/ /g, '_');
            const carWikiURL = baseWikiURL + carToPathName;
            
            return (
                <div className="ui card" key={car.id}>
                    <div className="image">
                        <img src={car.picture_location} alt={car.model} />
                    </div>
                    <div className="content">
                        <a href={car.link} className="header center aligned" target="_blank">{car.brand}</a>
                        <div className="meta center aligned">{car.model}</div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">{car.transmission}</span>
                        <span>{car.year}</span>
                    </div>
                    <div className="extra content">
                        <a href={carWikiURL} target="_blank" className="ui basic black button fluid">Learn More</a>
                        <br/>
                        <a href={car.link} className="ui button fluid green" target="_blank">Go to Mod</a>
                    </div>
                </div>
            );
        })
    }

    // Show a message when there are no cars matching search criteria
    renderMessage() {
        if(this.filteredCarsArr.length === 0) {
            return (
                <div className="ui negative message">
                    <div className="header">No cars found</div>
                    <p>Try another search</p>
                </div>
            );
        }
    }


    render() {
        return (
            <div className="carsList-grid">
                <FilterForm onClick={this.filterCars} />
                <SortDropdown />
                {this.renderMessage()}
                <div className="ui link cards" style={{marginTop: '3rem'}}>
                    {this.renderCars()}
                </div>
                <br/>
                <Pagination />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { cars: Object.values(state.cars), brands: Object.values(state.brands), selectedFilters: state.selectedFilters, sortName: state.currentSort.sortName, pagination: state.pagination };
}

export default connect(mapStateToProps, { fetchCars, updateTotalItems, updatePages, updateCurrentPage, updateStartIndex, updateEndIndex })(ShowList);