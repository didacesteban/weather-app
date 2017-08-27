const expect = require('chai').expect;
const fetchCountriesWeather = require('../actions/countriesActions');

const countryFake = {
  fetch: function (opts, callback) {
    callback(null, [
      {"data":{"cnt":4,"list":[{"coord":{"lon":-58.38,"lat":-34.61},"sys":{"type":1,"id":4685,"message":0.0021,"country":"AR","sunrise":1503829058,"sunset":1503869537},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"main":{"temp":16.49,"pressure":1015,"humidity":93,"temp_min":16,"temp_max":17},"visibility":10000,"wind":{"speed":3.6,"deg":110},"clouds":{"all":90},"dt":1503855689,"id":3435910,"name":"Buenos Aires"},{"coord":{"lon":-70.65,"lat":-33.46},"sys":{"type":1,"id":4670,"message":0.0029,"country":"CL","sunrise":1503831935,"sunset":1503872547},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"}],"main":{"temp":14.5,"pressure":1018,"humidity":44,"temp_min":14,"temp_max":15},"visibility":5000,"wind":{"speed":2.6},"clouds":{"all":75},"dt":1503855689,"id":3871336,"name":"Santiago"},{"coord":{"lon":-77.03,"lat":-12.04},"sys":{"type":0,"id":0,"message":0.002,"country":"PE","sunrise":1503832454,"sunset":1503875072},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"main":{"temp":20.82,"pressure":878.18,"humidity":52,"temp_min":20.82,"temp_max":20.82,"sea_level":1026.28,"grnd_level":878.18},"wind":{"speed":1.23,"deg":203.003},"clouds":{"all":0},"dt":1503855689,"id":3936456,"name":"Lima"},{"coord":{"lon":-46.64,"lat":-23.55},"sys":{"type":1,"id":4541,"message":0.0034,"country":"BR","sunrise":1503825671,"sunset":1503867280},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"main":{"temp":25.96,"pressure":1018,"humidity":26,"temp_min":24,"temp_max":27},"visibility":10000,"wind":{"speed":1.5,"deg":60},"clouds":{"all":0},"dt":1503855689,"id":3448439,"name":"Sao Paulo"}]},"status":200,"statusText":"OK","headers":{"content-type":"application/json; charset=utf-8"},"config":{"transformRequest":{},"transformResponse":{},"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"headers":{"Accept":"application/json, text/plain, */*"},"method":"get","url":"http://api.openweathermap.org/data/2.5/group?id=3435910,3871336,3936456,3448439&units=metric&appid=3df887a8ba28b100af8812a5dab78e9b"},"request":{}}
    ]);
  }
};
const fetchCountries = new fetchCountriesWeather(countryFake);

describe("FechtCountriesWeather Tests",()=> {
  describe("Validate Options",()=> {
    it('it should return an error if presenter does not send options', done=> {
      fetchCountries.execute()
      .then(response => {
        done(new Error('should not be here'))
      })
      .catch(err => {
        expect(err).to.be.an('error');
        expect(err.message).to.be.a('string');
        expect(err.message).to.equal('No options setted');
        done();
      })
    })
  });
});
