import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import ModForm from './ModForm';
import ModReview from './ModReview';

class NewModForm extends React.Component {
    componentWillUnmount() {
        this.props.clearForm();
    }

    renderContent() {
        if (this.props.form.showReview) {
            return <ModReview />;
        }

        return <ModForm />;
    }

    render() {
        return <>{this.renderContent()}</>;
    }
}

const mapStateToProps = state => {
    return { form: state.form };
};

export default connect(mapStateToProps, actions)(NewModForm);
