import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';

import ModsList from './ModsList';

class NewMod extends React.Component {
    componentDidUpdate() {
        if (this.props.isSignedIn === false) {
            history.push('/');
        }
    }

    render() {
        return (
            <div>
                <Link to='/newmod/form' className='positive ui button'>
                    <span>Add New Mod</span>
                    <i style={{ marginLeft: '15px', opacity: '1' }} className='cloud upload icon'></i>
                </Link>
                <ModsList />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.oAuth.isSignedIn };
};

export default connect(mapStateToProps)(NewMod);
