import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCars } from '../../actions';
import Car from '../Car';

const ModsList = props => {
    const [userContribution, updateUserContribution] = useState(0);

    useEffect(() => {
        if (props.cars.length === 0) {
            props.fetchCars();
        }
    }, []);

    useEffect(() => {
        updateUserContribution(props.cars.length);
    }, [props.cars]);

    useEffect(() => {
        updatePagination();
    }, [props.cars]);

    const updatePagination = () => {
        if (props.totalItems !== props.cars.length) {
            const newCarAmount = props.cars.length;
            props.updateTotalItems(newCarAmount);
            props.updatePages(Math.ceil(newCarAmount / props.pageSize));
            props.updateCurrentPage(1);
        }
    };

    const renderCarCards = (carsList, userId) => {
        const cars = carsList
            .filter(car => car.createdBy === userId)
            .sort((a, b) => {
                if (a.dateAdded < b.dateAdded) {
                    return 1;
                }
                if (a.dateAdded > b.dateAdded) {
                    return -1;
                }
                return 0;
            })
            .map(car => {
                if (
                    carsList.indexOf(car) < props.startIndex ||
                    carsList.indexOf(car) > props.endIndex
                ) {
                    return;
                }
                const baseWikiURL = 'https://en.wikipedia.org/wiki/';
                const carToPathName = `${car.brand} ${car.model}`.replace(
                    / /g,
                    '_'
                );
                const carWikiURL = baseWikiURL + carToPathName;

                return (
                    <Car
                        key={car.id}
                        brand={car.brand}
                        model={car.model}
                        img={car.imgURL}
                        link={car.modURL}
                        transmission={car.transmission}
                        year={car.year}
                        wikiLink={carWikiURL}
                        carClass={car.carClass}
                    />
                );
            });

        return cars;
    };

    return (
        <div className='mods-list'>
            <h1 className='ui header contribution'>
                Your contribution ({userContribution})
            </h1>
            <div className='ui cards'>
                {renderCarCards(props.cars, props.userId)}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { cars: Object.values(state.cars), userId: state.oAuth.userId };
};

export default connect(mapStateToProps, { fetchCars })(ModsList);
