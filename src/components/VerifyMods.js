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
        console.log('NODE_ENV: ', process.env.NODE_ENV);
        console.log('CONTEXT: ', process.env.CONTEXT);
        console.log('FIREBASE_API_KEY: ', process.env.FIREBASE_API_KEY);
        console.log('FIREBASE_AUTH_DOMAIN: ', process.env.FIREBASE_AUTH_DOMAIN);
        console.log('FIREBASE_PROJECT_ID: ', process.env.FIREBASE_PROJECT_ID);
        console.log('FIREBASE_STORAGE_BUCKET: ', process.env.FIREBASE_STORAGE_BUCKET);
        console.log('FIREBASE_MESSAGING_SENDER_ID: ', process.env.FIREBASE_MESSAGING_SENDER_ID);
        console.log('FIREBASE_APP_ID: ', process.env.FIREBASE_APP_ID);
        console.log('FIREBASE_MEASUREMENT_ID: ', process.env.FIREBASE_MEASUREMENT_ID);
        console.log('FIREBASE_DATABASE_URL: ', process.env.FIREBASE_DATABASE_URL);
        console.log('ADMIN_ID: ', process.env.ADMIN_ID);
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
