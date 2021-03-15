import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import brandsReducer from './brandsReducer';
import selectedFilterReducer from './selectedFilterReducer';
import sortReducer from './sortReducer';
import paginationReducer from './paginationReducer';
import userReducer from './userReducer';

export default combineReducers({
    cars: carsReducer,
    brands: brandsReducer,
    selectedFilters: selectedFilterReducer,
    currentSort: sortReducer,
    pagination: paginationReducer,
    user: userReducer,
});
