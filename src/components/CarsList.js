import React, { useEffect } from 'react';
import { sortByBrand, sortByYear, sortByDateAdded } from '../modules/sort';
import { renderCars } from '../modules/renderCars';

const CarsList = ({ props }) => {
    let filteredCarsArr = [];

    useEffect(() => {
        updatePagination();
    }, [filteredCarsArr]);

    const updatePagination = () => {
        if (props.pagination.totalItems !== filteredCarsArr.length) {
            const newCarAmount = filteredCarsArr.length;
            props.updateTotalItems(newCarAmount);
            props.updatePages(Math.ceil(newCarAmount / props.pagination.pageSize));
            props.updateCurrentPage(1);
            props.updateCarsLength(filteredCarsArr.length);
        }
    };

    // Create new array of cars with filtered cars
    filteredCarsArr = props.cars
        .filter(car => {
            // Looks for which filters are currently selected
            const brandIsSelected = props.selectedFilters.selectedBrand && props.selectedFilters.selectedBrand !== car.brand;
            const classIsSelected = props.selectedFilters.selectedClass && props.selectedFilters.selectedClass !== car.car_type;
            const decadeIsSelected =
                props.selectedFilters.selectedDecade &&
                !(props.selectedFilters.selectedDecade + 10 - car.year < 10 && props.selectedFilters.selectedDecade + 10 - car.year > 0);
            const shifterIsSelected = props.selectedFilters.selectedShifter && props.selectedFilters.selectedShifter !== car.transmission;
            const carSearchTerm = `${car.brand.toLowerCase()} ${car.model.toLowerCase()} ${car.link.toLowerCase()} ${car.year.toLowerCase()} ${car.transmission.toLowerCase()} ${car.car_type.toLowerCase()}`;
            const searchTermFilter = props.selectedFilters.searchTerm && !carSearchTerm.includes(props.selectedFilters.searchTerm.toLowerCase());

            if (!(brandIsSelected || classIsSelected || decadeIsSelected || shifterIsSelected || searchTermFilter)) {
                return car;
            }
        })
        .sort((a, b) => {
            switch (props.sortName) {
                case 'nameDown':
                    return sortByBrand(a, b);
                case 'nameUp':
                    return sortByBrand(b, a);
                case 'yearOld':
                    return sortByYear(a, b);
                case 'yearNew':
                    return sortByYear(b, a);
                case 'dateAddedOld':
                    return sortByDateAdded(a, b);
                case 'dateAddedNew':
                    return sortByDateAdded(b, a);
            }
        });

    return <div className='ui link cards'>{renderCars(props, filteredCarsArr)}</div>;
};

export default CarsList;
