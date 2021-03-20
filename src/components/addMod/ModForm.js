import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import firebase from 'firebase/app';
import '../../firebase/config';
import { imagesRef } from '../../firebase/config';

import Dropdown from '../dropdown/Dropdown';

const ModForm = props => {
    useEffect(() => {
        if (props.brands.length === 0) {
            props.fetchBrandsCustom('../json/brands.json');
        }
    }, []);

    const [imgError, setImgError] = useState(null);

    const imgTypes = ['image/png', 'image/jpeg'];

    const changeHandler = e => {
        let selected = e.target.files[0];

        if (selected && imgTypes.includes(selected.type)) {
            const ref = imagesRef.child(selected.name);

            const uploadTask = ref.put(selected);

            uploadTask.on(
                firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                snapshot => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    // console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                            // console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                            // console.log('Upload is running');
                            break;
                    }
                },
                error => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                        // console.log('File available at', downloadURL);
                        props.setFormImageURL(downloadURL);
                    });
                }
            );

            setImgError(null);
        } else {
            props.setFormImageURL(null);
            setImgError('Please select an image file (png or jpeg)');
        }
    };

    const renderBrandOptions = () => {
        return props.brands.map(brand => {
            return (
                <div
                    key={brand.id}
                    className={`item ${props.form.brand === brand.brand ? 'active selected' : ''}`}
                    // className={`item`}
                    data-value={brand.brand}
                    onClick={() => props.setFormBrand(brand.brand)}
                    children={brand.brand}
                />
            );
        });
    };

    const renderTransmissionOptions = () => {
        const shifterOptions = ['Manual', 'Paddle Shifter', 'Sequential'];

        return shifterOptions.map(value => {
            return (
                <div
                    key={value}
                    className={`item ${props.form.transmission === value ? 'active selected' : ''}`}
                    data-value={value}
                    onClick={() => props.setFormTransmission(value)}
                    children={value}
                />
            );
        });
    };

    const renderClassOptions = () => {
        const classOptions = ['Road', 'Race', 'Prototype', 'Open Wheel'];

        return classOptions.map(className => {
            return (
                <div
                    key={className}
                    className={`item ${props.form.carClass === className ? 'active selected' : ''}`}
                    data-value={className}
                    onClick={() => props.setFormCarClass(className)}
                    children={className}
                />
            );
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.setFormCreatedBy(props.userId);
        props.setFormDateAdded(new Date().toJSON());
        props.setFormShowReview(true);
    };

    return (
        <form className='ui form mod-form' onSubmit={handleSubmit}>
            <div className='fields'>
                <div className='field'>
                    <label>Mod Image</label>
                    <input type='file' name='modImage' id='modImage' onChange={changeHandler} />
                    {imgError && <div className='ui negative message'>{imgError}</div>}
                    {props.form.imgURL && (
                        <div className='preview-img'>
                            <img src={props.form.imgURL} />
                        </div>
                    )}
                </div>
            </div>
            <div className='field'>
                <label>Mod Link</label>
                <input type='text' placeholder='Enter mod link' value={props.form.modURL} onChange={e => props.setFormModLink(e.target.value)} />
            </div>
            <div className='field'>
                <label>Brand</label>
                <Dropdown inputName='Select a brand' selectedValue={props.form.brand} children={renderBrandOptions()} />
            </div>
            <div className='field'>
                <label>Car Model</label>
                <input type='text' placeholder='Enter Car Model Name' value={props.form.model} onChange={e => props.setFormModel(e.target.value)} />
            </div>
            <div className='field'>
                <label>Year</label>
                <input type='number' placeholder='Enter Car Year' value={props.form.year} onChange={e => props.setFormYear(Number(e.target.value))} />
            </div>
            <div className='field'>
                <label>Transmission</label>
                <Dropdown inputName='Select transmission type' selectedValue={props.form.transmission} children={renderTransmissionOptions()} />
            </div>
            <div className='field'>
                <label>Car Class</label>
                <Dropdown inputName='Select car class' selectedValue={props.form.carClass} children={renderClassOptions()} />
            </div>
            <Link to='/newmod' className='ui button left floated negative' onClick={props.clearForm}>
                Cancel
            </Link>
            <button type='submit' className='ui button right floated positive'>
                Next
                <i className='arrow alternate circle right outline icon' style={{ opacity: '1' }}></i>
            </button>
        </form>
    );
};

const mapStateToProps = state => {
    return { brands: Object.values(state.brands), form: state.form, userId: state.oAuth.userId };
};

export default connect(mapStateToProps, actions)(ModForm);
