import axios from 'axios';
import _ from 'lodash';

export const fetchCars = () => async dispatch => {
        let { data } = await axios.get('./json/cars.json');

        dispatch({ type: 'FETCH_CARS', payload: data });
}

export const fetchBrands = () => async dispatch => {
        let { data } = await axios.get('./json/brands.json');

        dispatch({ type: 'FETCH_BRANDS', payload: data });
}

export const fetchBrandsCustom = (url) => async dispatch => {
        let { data } = await axios.get(url);

        dispatch({ type: 'FETCH_BRANDS_CUSTOM', payload: data });
}

export const openBrands = (isOpen) => {
        return {
                type: 'OPEN_BRANDS',
                payload: isOpen
        }
}

export const openClass = (isOpen) => {
        return {
                type: 'OPEN_CLASS',
                payload: isOpen
        }
}

export const openDecades = (isOpen) => {
        return {
                type: 'OPEN_DECADES',
                payload: isOpen
        }
}

export const openShifters = (isOpen) => {
        return {
                type: 'OPEN_SHIFTERS',
                payload: isOpen
        }
}

export const selectBrand = brand => {
        return {
                type: 'SELECT_BRAND',
                payload: brand
        }
}

export const selectClass = carClass => {
        return {
                type: 'SELECT_CLASS',
                payload: carClass
        }
}

export const selectDecade = decade => {
        return {
                type: 'SELECT_DECADE',
                payload: decade
        }
}

export const selectShifter = shifter => {
        return {
                type: 'SELECT_SHIFTER',
                payload: shifter
        }
}

export const resetFilters = () => {
        return { type: 'RESET_FILTERS' };
}

export const filterCars = () => {
        return { type: 'FILTER_CARS' };
}

export const filterSearch = searchTerm => {
        return {
                type: 'FILTER_SEARCH',
                payload: searchTerm
        }
}