import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import filterDropdownReducer from './filterDropdownsReducer';
import brandsReducer from './brandsReducer';
import selectedFilterReducer from './selectedFilterReducer';
import sortReducer from './sortReducer';

export default combineReducers({
    cars: carsReducer,
    brands: brandsReducer,
    filterDropdowns: filterDropdownReducer,
    selectedFilters: selectedFilterReducer,
    currentSort: sortReducer
});