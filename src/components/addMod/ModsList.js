import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCars } from '../../actions';
import Car from '../Car';

const ModsList = props => {
  const [userContribution, updateUserContribution] = useState(0);
  const [userMods, updateUserMods] = useState([]);

  useEffect(() => {
    if (props.cars.length === 0) {
      props.fetchCars();
    }
  }, []);

  useEffect(() => {
    let newUserMods = props.cars.filter(car => {
      return car.createdBy === props.userId;
    });
    updateUserMods(newUserMods);
    updateUserContribution(newUserMods.length);
  }, [props.cars, props.userId]);

  useEffect(() => {
    updatePagination();
  }, [userMods]);

  const updatePagination = () => {
    if (props.totalItems !== userMods.length) {
      const newCarAmount = userMods.length;
      props.updateTotalItems(newCarAmount);
      props.updatePages(Math.ceil(newCarAmount / props.pageSize));
      props.updateCurrentPage(1);
    }
  };

  const renderCarCards = (carsList, userId) => {
    const cars = carsList
      .sort((a, b) => {
        if (a.dateAdded < b.dateAdded) {
          return 1;
        }
        if (a.dateAdded > b.dateAdded) {
          return -1;
        }
        return 0;
      })
      .filter(car => car.createdBy === userId)
      .map(car => {
        if (carsList.indexOf(car) < props.startIndex || carsList.indexOf(car) > props.endIndex) {
          return;
        }
        const baseWikiURL = 'https://en.wikipedia.org/wiki/';
        const carToPathName = `${car.brand} ${car.model}`.replace(/ /g, '_');
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
      <h1 className='contribution'>Your contribution ({userContribution} mods)</h1>
      <div className='mod-cards'>{renderCarCards(props.cars, props.userId)}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { cars: Object.values(state.cars), userId: state.oAuth.userId };
};

export default connect(mapStateToProps, { fetchCars })(ModsList);
