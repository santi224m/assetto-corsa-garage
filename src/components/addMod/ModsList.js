import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Car from '../Car';

class ModsList extends React.Component {
    constructor(props) {
        super(props);
        this.usersCars = [];
        this.state = { userContribution: 0 };
    }

    componentDidMount() {
        if (this.props.cars.length === 0) {
            this.props.fetchCars();
        }
    }

    renderCarCards(carsList, userId) {
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

        return { cars, carCount: cars.length };
    }

    render() {
        return (
            <div className='mods-list'>
                <h1 className='ui header contribution'>Your contribution ({this.renderCarCards(this.props.cars, this.props.userId).carCount})</h1>
                <div className='ui cards'>{this.renderCarCards(this.props.cars, this.props.userId).cars}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { cars: Object.values(state.cars), userId: state.oAuth.userId };
};

export default connect(mapStateToProps, actions)(ModsList);
