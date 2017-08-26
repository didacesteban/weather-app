import {combineReducers} from 'redux';
import Countries from './countriesReducer';

const allReducers = combineReducers({
    countries: Countries
});

export default allReducers
