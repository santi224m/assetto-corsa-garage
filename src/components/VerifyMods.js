import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Car from './Car';
import history from '../history';
import keys from '../config/keys';
import firebase from 'firebase/app';
import '../firebase/config';
import { db } from '../firebase/config';

class VerifyMods extends React.Component {
    constructor(props) {
        super(props);
        this.handleVerify = this.handleVerify.bind(this);
    }

    componentDidMount() {
        if (this.props.cars.length === 0) {
            this.props.fetchCars();
        }
    }

    handleVerify(car, user) {
        const newModsVerified = user.modsVerified + 1;
        let updates = {};
        updates['users/' + user.userId + '/modsVerified'] = newModsVerified;
        updates['cars/' + car.id + '/verified'] = true;

        db.ref().update(updates);
    }

    handleRemove(car) {
        db.ref('cars/' + car.id).remove();
    }

    renderUnverifiedCars(cars, user) {
        return cars
            .filter(car => car.verified === false)
            .map(car => {
                return (
                    <div key={car.id} className='ui card'>
                        <Car brand={car.brand} model={car.model} img={car.imgURL} link={car.modURL} transmission={car.transmission} year={car.year} />
                        <button className='ui button positive' onClick={() => this.handleVerify(car, user)}>
                            Verify
                        </button>
                        <button className='ui button negative' onClick={() => this.handleRemove(car)}>
                            Remove
                        </button>
                    </div>
                );
            });
    }

    render() {
        if (this.props.user.isSignedIn !== null && this.props.user.userId !== keys.adminId) {
            history.push('/');
        }
        return <div className='ui link cards'>{this.renderUnverifiedCars(this.props.cars, this.props.user)}</div>;
    }
}

const mapStateToProps = state => {
    return { cars: Object.values(state.cars), user: state.oAuth };
};

export default connect(mapStateToProps, actions)(VerifyMods);
