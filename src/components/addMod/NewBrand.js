import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import firebase from 'firebase/app';
import '../../firebase/config';
import { imgagesBrandsRef } from '../../firebase/config';

const NewBrand = props => {
  const [imgError, setImgError] = useState(null);

  const imgTypes = ['image/png', 'image/jpeg'];

  const uploadBrandImg = e => {
    let selected = e.target.files[0];
    if (selected && imgTypes.includes(selected.type)) {
      setImgError(null);
      const ref = imgagesBrandsRef.child(selected.name);
      const uploadTask = ref.put(selected);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
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
            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downlaodURL => {
            props.setBrandFormImgURL(downlaodURL);
          });
        }
      );
    } else {
      setImgError('Please select an image file (png or jpeg)');
    }
  };

  return (
    <>
      <div className='field'>
        <label>Brand Logo</label>
        <label className='input-file ui button fluid green' htmlFor='brandLogo'>
          Upload Image <i className='upload icon'></i>
        </label>
        <input type='file' name='brandLogo' id='brandLogo' onChange={uploadBrandImg} />
        {imgError && <div className='ui negative message'>{imgError}</div>}
        {props.showErrMsg && props.newBrandLogoErr && (
          <div className='ui negative message'>
            <p>{props.newBrandLogoErr}</p>
          </div>
        )}
        {props.newBrandForm.imgURL && (
          <div className='preview-img'>
            <img src={props.newBrandForm.imgURL} />
          </div>
        )}
      </div>
      <div className='field'>
        <label>Brand Name</label>
        <input
          type='text'
          placeholder='Enter Brand Name with the first letter of each word capitalized'
          value={props.newBrandForm.brandName}
          onChange={e => props.setBrandFormName(e.target.value)}
        />
        {props.showErrMsg && props.newBrandNameErr && (
          <div className='ui negative message'>
            <p>{props.newBrandNameErr}</p>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { form: state.form, newBrandForm: state.newBrandForm };
};

export default connect(mapStateToProps, actions)(NewBrand);
