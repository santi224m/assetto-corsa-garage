import React from 'react';
import { connect } from 'react-redux';
import { googleSignIn, signUserOut, updateUserSignedIn } from '../firebase/auth';
import { signIn, signOut } from '../actions';

class SignIn extends React.Component {
    componentDidMount() {
        // Check whether user is signed in
        updateUserSignedIn(this.props);
    }

    renderSignInBtn() {
        if (this.props.user.isSignedIn === false) {
            return (
                <a className='item' onClick={googleSignIn}>
                    Sign in
                </a>
            );
        } else if (this.props.user.isSignedIn) {
            return (
                <a className='item' onClick={signUserOut}>
                    Sign Out
                </a>
            );
        } else {
            return <div></div>;
        }
    }

    render() {
        return <>{this.renderSignInBtn()}</>;
    }
}

const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(mapStateToProps, { signIn, signOut })(SignIn);
