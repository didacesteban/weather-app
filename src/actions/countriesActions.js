import axios from 'axios';
import CountryMapper from '../domain/models/country'
const _ = require('lodash');

export function fetchCountries() {
  return function(dispatch) {
    dispatch({type: "FETCH_COUNTRIES"});
    axios.get("http://api.openweathermap.org/data/2.5/group?id=3435910,3871336,3936456,3448439&units=metric&appid=3df887a8ba28b100af8812a5dab78e9b")
      .then((response) => {
        dispatch({type: "FETCH_COUNTRIES_FULFILLED", payload: _.map(response.data.list, (obj) => {return CountryMapper(obj);})})
      })
      .catch((err) => {
        dispatch({type: "FETCH_COUNTRIES_REJECTED", payload: err})
      })
  }
}
