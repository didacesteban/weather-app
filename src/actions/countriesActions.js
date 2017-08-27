import axios from 'axios';
import CountryMapper from '../domain/models/country'
const _ = require('lodash');

export function fetchCountries() {
  return function(dispatch) {
    dispatch({type: "FETCH_COUNTRIES"});
    axios.get("http://api.openweathermap.org/data/2.5/group?id=3435910,3871336,3936456,3448439&units=metric&appid=3df887a8ba28b100af8812a5dab78e9b")
      .then((response) => {
        console.log(JSON.stringify(response));
        const data = _.map(response.data.list, (obj) => {return CountryMapper(obj);});
        dispatch({
          type: "FETCH_COUNTRIES_FULFILLED",
          payload: data
        })
        if(localStorage.getItem("allData") == null){
          localStorage.setItem("allData", JSON.stringify(data));
        }else{
          let allData = localStorage.getItem("allData");
          allData = _.concat(allData, JSON.stringify(data));
          localStorage.setItem("allData", allData);
        }
      })
      .catch((err) => {
        dispatch({type: "FETCH_COUNTRIES_REJECTED", payload: err})
      })
  }
}

export function clearData() {
  return function(dispatch) {
    dispatch({type: "CLEAR_DATA"});
    if(localStorage.getItem("allData") == null){return;}
    localStorage.removeItem("allData");
  }
}
