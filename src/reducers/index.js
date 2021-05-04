import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import brandsReducer from './brandsReducer';
import selectedFilterReducer from './selectedFilterReducer';
import sortReducer from './sortReducer';
import oAuthReducer from './oAuthReducer';
import modFormReducer from './modFormReducer';
import newBrandReducer from './newBrandReducer';

export default combineReducers({
  cars: carsReducer,
  brands: brandsReducer,
  selectedFilters: selectedFilterReducer,
  currentSort: sortReducer,
  oAuth: oAuthReducer,
  form: modFormReducer,
  newBrandForm: newBrandReducer
});
