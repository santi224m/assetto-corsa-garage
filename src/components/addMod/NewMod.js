import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { Helmet } from 'react-helmet';

import ModsList from './ModsList';
import BannerWithButton from '../BannerWithButton';

class NewMod extends React.Component {
    componentDidUpdate() {
        if (this.props.isSignedIn === false) {
            history.push('/');
        }
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Assetto Corsa Garage | Add Mod</title>
                </Helmet>
                <div>
                    <BannerWithButton />
                    <div className='ui container new-mod-page'>
                        <ModsList />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.oAuth.isSignedIn };
};

export default connect(mapStateToProps)(NewMod);
