import axios from 'axios';
import _ from 'lodash';
import firebase from 'firebase/app';
import '../firebase/config';
import { db } from '../firebase/config';

export const fetchCars = () => async dispatch => {
    db.ref('cars/').on('value', snapshot => {
        const data = snapshot.val();
        dispatch({ type: 'FETCH_CARS', payload: data });
    });
};

// export const fetchCars = () => async dispatch => {
//     let { data } = await axios.get('./json/cars.json');

//     dispatch({ type: 'FETCH_CARS', payload: data });
// };

export const fetchBrands = () => async dispatch => {
    let { data } = await axios.get('./json/brands.json');

    dispatch({ type: 'FETCH_BRANDS', payload: data });
};

export const fetchBrandsCustom = url => async dispatch => {
    let { data } = await axios.get(url);

    dispatch({ type: 'FETCH_BRANDS_CUSTOM', payload: data });
};

export const selectBrand = brand => {
    return {
        type: 'SELECT_BRAND',
        payload: brand,
    };
};

export const selectClass = carClass => {
    return {
        type: 'SELECT_CLASS',
        payload: carClass,
    };
};

export const selectDecade = decade => {
    return {
        type: 'SELECT_DECADE',
        payload: decade,
    };
};

export const selectShifter = shifter => {
    return {
        type: 'SELECT_SHIFTER',
        payload: shifter,
    };
};

export const resetFilters = () => {
    return { type: 'RESET_FILTERS' };
};

// End Dropdown actions

export const filterCars = () => {
    return { type: 'FILTER_CARS' };
};

export const filterSearch = searchTerm => {
    return {
        type: 'FILTER_SEARCH',
        payload: searchTerm,
    };
};

export const selectSort = sortName => {
    return {
        type: 'SELECT_SORT',
        payload: sortName,
    };
};

// Pagination Actions
export const updateTotalItems = num => {
    return {
        type: 'UPDATE_TOTAL_ITEMS',
        payload: num,
    };
};

export const updateCurrentPage = num => {
    return {
        type: 'UPDATE_CURRENT_PAGE',
        payload: num,
    };
};

export const updatePageSize = num => {
    return {
        type: 'UPDATE_PAGE_SIZE',
        payload: num,
    };
};

export const updateTotalPages = num => {
    return {
        type: 'UPDATE_TOTAL_PAGES',
        payload: num,
    };
};

export const updateStartPage = num => {
    return {
        type: 'UPDATE_START_PAGE',
        payload: num,
    };
};

export const updateEndPage = num => {
    return {
        type: 'UPDATE_END_PAGE',
        payload: num,
    };
};

export const updateStartIndex = num => {
    return {
        type: 'UPDATE_START_INDEX',
        payload: num,
    };
};

export const updateEndIndex = num => {
    return {
        type: 'UPDATE_END_INDEX',
        payload: num,
    };
};

export const updatePages = num => {
    return {
        type: 'UPDATE_PAGES',
        payload: num,
    };
};

export const updateCarsLength = num => {
    return {
        type: 'UPDATE_CARS_LENGTH',
        payload: num,
    };
};

// End Pagination Actions

// Auth actions
export const signIn = (userId, userName, modsVerified) => {
    return {
        type: 'SIGN_IN',
        payload: {
            id: userId,
            name: userName,
            modsVerified: modsVerified,
        },
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT',
    };
};

// new mod form actions
export const setFormModLink = url => {
    return {
        type: 'SET_FORM_MOD_LINK',
        payload: url,
    };
};

export const setFormBrand = brand => {
    return {
        type: 'SET_FORM_BRAND',
        payload: brand,
    };
};

export const setFormModel = model => {
    return {
        type: 'SET_FORM_MODEL',
        payload: model,
    };
};

export const setFormYear = year => {
    return {
        type: 'SET_FORM_YEAR',
        payload: year,
    };
};

export const setFormTransmission = transmission => {
    return {
        type: 'SET_FORM_TRANSMISSION',
        payload: transmission,
    };
};

export const setFormCarClass = carClass => {
    return {
        type: 'SET_FORM_CAR_CLASS',
        payload: carClass,
    };
};

export const setFormImageURL = url => {
    return {
        type: 'SET_FORM_IMAGE_URL',
        payload: url,
    };
};

export const setFormCreatedBy = id => {
    return {
        type: 'SET_FORM_CREATED_BY',
        payload: id,
    };
};

export const setFormDateAdded = date => {
    return {
        type: 'SET_FORM_DATE_ADDED',
        payload: date,
    };
};

export const setFormShowReview = bool => {
    return {
        type: 'SET_FORM_SHOW_REVIEW',
        payload: bool,
    };
};

export const clearForm = () => {
    return {
        type: 'CLEAR_FORM',
    };
};
