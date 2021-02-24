import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';

import FilterForm from './FilterForm';
import FilterBrands from './filters/FilterBrands';
import SortDropdown from './SortDropdown';

class ShowList extends React.Component {

    componentDidMount() {
        if(this.props.cars.length === 0) {
            this.props.fetchCars();
        }
    }

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
        return this.props.cars.sort((a, b) => {
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
        }).map(car => {
            const brandIsSelected = this.props.selectedFilters.selectedBrand && this.props.selectedFilters.selectedBrand !== car.brand;
            const classIsSelected = this.props.selectedFilters.selectedClass && this.props.selectedFilters.selectedClass !== car.car_type;
            const decadeIsSelected = this.props.selectedFilters.selectedDecade && !((this.props.selectedFilters.selectedDecade + 10) - car.year < 10 && (this.props.selectedFilters.selectedDecade + 10) - car.year > 0);
            const shifterIsSelected = this.props.selectedFilters.selectedShifter && this.props.selectedFilters.selectedShifter !== car.transmission;
            const carSearchTerm = `${car.brand.toLowerCase()} ${car.model.toLowerCase()} ${car.link.toLowerCase()} ${car.year.toLowerCase()} ${car.transmission.toLowerCase()} ${car.car_type.toLowerCase()}`;
            const searchTermFilter = this.props.selectedFilters.searchTerm && !(carSearchTerm.includes(this.props.selectedFilters.searchTerm.toLowerCase()));
            // const searchTermFilter = this.props.selectedFilters.searchTerm && !(car.brand.includes(this.props.selectedFilters.searchTerm) || car.model.includes(this.props.selectedFilters.searchTerm) || car.link.includes(this.props.selectedFilters.searchTerm));

            if(brandIsSelected || classIsSelected || decadeIsSelected || shifterIsSelected || searchTermFilter) {
                return;
            }    
            
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
                        <button className="ui basic button fluid">Learn More</button>
                        <br/>
                        <a href={car.link} className="ui button fluid primary" target="_blank">Go to Mod</a>
                    </div>
                </div>
            );
        })
    }



    render() {
        // console.log(this.props.selectedFilters.selectedClass)

        return (
            <div>
                <FilterForm onClick={this.filterCars} />
                <SortDropdown />
                <div className="ui link cards" style={{marginTop: '5rem'}}>
                    {this.renderCars()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { cars: Object.values(state.cars), brands: Object.values(state.brands), selectedFilters: state.selectedFilters, sortName: state.currentSort.sortName };
}

export default connect(mapStateToProps, { fetchCars })(ShowList);