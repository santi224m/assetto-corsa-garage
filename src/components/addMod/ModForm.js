import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import firebase from 'firebase/app';
import '../../firebase/config';
import { imagesRef } from '../../firebase/config';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../firebase/config';

import Dropdown from '../dropdown/Dropdown';
import NewBrand from './NewBrand';

const ModForm = props => {
  useEffect(() => {
    if (props.brands.length === 0) {
      props.fetchBrands();
    }

    if (props.cars.length === 0) {
      props.fetchCars();
    }
  }, []);

  const [showErrMsg, setShowErrMsg] = useState(false);
  const [imgError, setImgError] = useState(null);
  const [linkErr, setlinkErr] = useState(null);
  const [brandErr, setBrandErr] = useState(null);
  const [modelErr, setModelErr] = useState(null);
  const [yearErr, setYearErr] = useState(null);
  const [transmissionErr, setTransmissionErr] = useState(null);
  const [classErr, setClassErr] = useState(null);
  const [newBrandLogoErr, setnewBrandLogoErr] = useState(null);
  const [newBrandNameErr, setNewBrandNameErr] = useState(null);
  const [modUrlWarning, setModUrlWarning] = useState(null);

  const imgTypes = ['image/png', 'image/jpeg'];

  // Validate form
  useEffect(() => {
    // Car image
    props.form.imgURL === null
      ? setImgError('Please upload an image of the car')
      : setImgError(null);
    // Mod URL
    props.form.modURL.length === 0
      ? setlinkErr('Please enter a link to the mod')
      : setlinkErr(null);
    props.cars.forEach(car => {
      if (car.modURL === props.form.modURL) {
        setModUrlWarning('Warning: There is already a mod with this link');
      }
    });
    // Brand Dropdown
    props.form.brand === null
      ? setBrandErr('Please select a brand')
      : setBrandErr(null);
    // Car model
    props.form.model.length === 0
      ? setModelErr('Please enter the car model')
      : setModelErr(null);
    // Year
    props.form.year.length === 0
      ? setYearErr('Please enter the year of the car')
      : setYearErr(null);
    // Transmission Dropdown
    props.form.transmission === null
      ? setTransmissionErr('Please select a transmission')
      : setTransmissionErr(null);
    // Car class
    props.form.carClass === null
      ? setClassErr('Please select a car class')
      : setClassErr(null);
    // Add a new brand - image
    props.newBrandForm.imgURL === null && props.form.brand === 'New Brand'
      ? setnewBrandLogoErr('Please upload an image of the brand logo')
      : setnewBrandLogoErr(null);
    // Add a new brand - image
    props.newBrandForm.brandName.length === 0 &&
    props.form.brand === 'New Brand'
      ? setNewBrandNameErr('Please enter the brand name')
      : setNewBrandNameErr(null);
  }, [props.form, props.newBrandForm]);

  const changeHandler = e => {
    let selected = e.target.files[0];
    const imgId = uuidv4();

    if (selected && imgTypes.includes(selected.type)) {
      const ref = imagesRef.child(imgId);

      const uploadTask = ref.put(selected);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        snapshot => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
    return props.brands
      .sort((a, b) => {
        if (a.brandName > b.brandName) {
          return 1;
        } else if (a.brandName < b.brandName) {
          return -1;
        } else {
          return 0;
        }
      })
      .map(brand => {
        return (
          <div
            key={brand.id}
            className={`item ${
              props.form.brand === brand.brandName ? 'active selected' : ''
            }`}
            // className={`item`}
            data-value={brand.brandName}
            onClick={() => props.setFormBrand(brand.brandName)}
            children={brand.brandName}
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
          className={`item ${
            props.form.transmission === value ? 'active selected' : ''
          }`}
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
          className={`item ${
            props.form.carClass === className ? 'active selected' : ''
          }`}
          data-value={className}
          onClick={() => props.setFormCarClass(className)}
          children={className}
        />
      );
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      linkErr ||
      brandErr ||
      imgError ||
      modelErr ||
      yearErr ||
      transmissionErr ||
      classErr ||
      newBrandLogoErr ||
      newBrandNameErr
    ) {
      setShowErrMsg(true);
    } else {
      props.setFormCreatedBy(props.userId);
      props.setFormDateAdded(new Date().toJSON());
      props.setFormShowReview(true);
      if (props.form.brand === 'New Brand') {
        const brandId = uuidv4();

        db.ref('brands/' + brandId).set({
          id: brandId,
          logoURl: props.newBrandForm.imgURL,
          brandName: props.newBrandForm.brandName
        });

        props.setFormBrand(props.newBrandForm.brandName);
      }
    }
  };

  return (
    <form
      className='ui form mod-form'
      onSubmit={handleSubmit}
      id='add-mod-form'
    >
      <div className='fields'>
        <div className='field large'>
          <label>Mod Image</label>
          <label
            className='input-file ui button fluid green'
            htmlFor='modImage'
          >
            Upload Image <i className='upload icon'></i>
          </label>
          <label htmlFor='files' id='files-label'>
            Drag and drop image here
            <input
              type='file'
              name='files'
              id='files'
              multiple='multiple'
              onChange={changeHandler}
            />
          </label>
          <input
            type='file'
            name='modImage'
            id='modImage'
            onChange={changeHandler}
          />
          {showErrMsg && imgError && (
            <div className='ui negative message'>{imgError}</div>
          )}
          {props.form.imgURL && (
            <div className='preview-img'>
              <img src={props.form.imgURL} />
            </div>
          )}
        </div>
      </div>
      <div className='field'>
        <label>Mod Link</label>
        <input
          type='text'
          placeholder='Enter mod link'
          value={props.form.modURL}
          onChange={e => props.setFormModLink(e.target.value)}
        />
        {showErrMsg && linkErr && (
          <div className='ui negative message'>
            <p>{linkErr}</p>
          </div>
        )}
        {modUrlWarning && (
          <div className='ui yellow message'>{modUrlWarning}</div>
        )}
      </div>
      <div className='field'>
        <label>Brand</label>
        <p className='info'>
          * If the brand is not in the dropdown, select the "New Brand" option
          to add it to the database.
        </p>
        <Dropdown inputName='Select a brand' selectedValue={props.form.brand}>
          <div
            className={`item ${
              props.form.brand === 'New Brand' ? 'active selected' : ''
            }`}
            // className={`item`}
            data-value='New Brand'
            onClick={() => props.setFormBrand('New Brand')}
            children={'New Brand'}
          />
          {renderBrandOptions()}
        </Dropdown>
        {showErrMsg && brandErr && (
          <div className='ui negative message'>
            <p>{brandErr}</p>
          </div>
        )}
      </div>
      {props.form.brand === 'New Brand' && (
        <NewBrand
          showErrMsg={showErrMsg}
          newBrandLogoErr={newBrandLogoErr}
          newBrandNameErr={newBrandNameErr}
        />
      )}
      <div className='field'>
        <label>Car Model</label>
        <input
          type='text'
          placeholder='Enter Car Model Name'
          value={props.form.model}
          onChange={e => props.setFormModel(e.target.value)}
        />
        {showErrMsg && modelErr && (
          <div className='ui negative message'>
            <p>{modelErr}</p>
          </div>
        )}
      </div>
      <div className='field'>
        <label>Year</label>
        <input
          type='number'
          placeholder='Enter Car Year'
          value={props.form.year}
          onChange={e => props.setFormYear(Number(e.target.value))}
        />
        {showErrMsg && yearErr && (
          <div className='ui negative message'>
            <p>{yearErr}</p>
          </div>
        )}
      </div>
      <div className='field'>
        <label>Transmission</label>
        <Dropdown
          inputName='Select transmission type'
          selectedValue={props.form.transmission}
          children={renderTransmissionOptions()}
        />
        {showErrMsg && transmissionErr && (
          <div className='ui negative message'>
            <p>{transmissionErr}</p>
          </div>
        )}
      </div>
      <div className='field'>
        <label>Car Class</label>
        <Dropdown
          inputName='Select car class'
          selectedValue={props.form.carClass}
          children={renderClassOptions()}
        />
        {showErrMsg && classErr && (
          <div className='ui negative message'>
            <p>{classErr}</p>
          </div>
        )}
      </div>
      <Link
        to='/newmod'
        className='ui button left floated negative'
        onClick={props.clearForm}
      >
        Cancel
      </Link>
      <button type='submit' className='ui button right floated secondary-color'>
        Next
        <i
          className='arrow alternate circle right outline icon'
          style={{ opacity: '1' }}
        ></i>
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    brands: Object.values(state.brands),
    cars: Object.values(state.cars),
    form: state.form,
    userId: state.oAuth.userId,
    newBrandForm: state.newBrandForm
  };
};

export default connect(mapStateToProps, actions)(ModForm);
