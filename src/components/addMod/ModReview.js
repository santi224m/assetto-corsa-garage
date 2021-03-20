import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../firebase/config';
import { db } from '../../firebase/config';
import { v4 as uuidv4 } from 'uuid';
import history from '../../history';

import Car from '../Car';

class ModReview extends React.Component {
    uploadMod(mod, user) {
        const modId = uuidv4();
        let verified = false;
        if (user.modsVerified >= 5) {
            verified = true;
        }

        db.ref('cars/' + modId).set({
            id: modId,
            brand: mod.brand,
            carClass: mod.carClass,
            createdBy: mod.createdBy,
            dateAdded: mod.dateAdded,
            imgURL: mod.imgURL,
            modURL: mod.modURL,
            model: mod.model,
            transmission: mod.transmission,
            year: mod.year,
            verified: verified,
        });

        history.push('/newmod');
    }

    renderMessage() {
        return (
            <>
                <h3 className='ui header'>Verified Mods: {this.props.user.modsVerified}</h3>
                <p>
                    Your mod has to be verified by us before it appears on the cars lists. Once you have 5 verified mods, your uploads no longer have
                    to be verified.
                </p>
            </>
        );
    }

    render() {
        const previewForm = this.props.form;
        return (
            <div className='form-review'>
                <h1 className='ui header'>Mod Preview</h1>
                {this.props.user.modsVerified < 5 && this.renderMessage()}
                <p>* The Learn More link is auto generated later.</p>

                <div className='mod-preview'>
                    <Car
                        brand={previewForm.brand}
                        model={previewForm.model}
                        img={previewForm.imgURL}
                        link={previewForm.modURL}
                        transmission={previewForm.transmission}
                        year={previewForm.year}
                        // wikiLink={'google.com'}
                    />
                </div>

                <button className='ui button basic primary' onClick={() => this.props.setFormShowReview(false)}>
                    Back
                </button>
                <button className='ui button positive right floated' onClick={() => this.uploadMod(this.props.form, this.props.user)}>
                    Post Mod
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { form: state.form, user: state.oAuth };
};

export default connect(mapStateToProps, actions)(ModReview);
