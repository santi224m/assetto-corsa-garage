import React from 'react';
import { connect } from 'react-redux';
import { googleSignIn, signUserOut, updateUserSignedIn } from '../firebase/auth';
import { signIn, signOut } from '../actions';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
  componentDidMount() {
    // Check whether user is signed in
    updateUserSignedIn(this.props);
  }

  renderSignInBtn() {
    if (this.props.oAuth.isSignedIn === false) {
      return (
        <a className='item' onClick={googleSignIn}>
          Sign in
        </a>
      );
    } else if (this.props.oAuth.isSignedIn) {
      return (
        <>
          <Link to='/newmod' className='item'>
            Add Mod
          </Link>
          <a className='item' onClick={signUserOut}>
            Sign Out
          </a>
        </>
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
  return { oAuth: state.oAuth };
};

export default connect(mapStateToProps, { signIn, signOut })(SignIn);
