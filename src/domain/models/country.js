class Country
{
  constructor (id, name, temperature, temperatureFormated, temperatureColor, date) {
    this.id = id;
    this.name = name;
    this.temperature = temperature;
    this.temperatureFormated = temperatureFormated;
    this.temperatureColor = temperatureColor;
    this.date = date;
  }
}

function CountryMapper (json)
{
  return new Country(
    json.id,
    json.name,
    json.main.temp,
    Math.round((json.main.temp * 100)/45),
    getTemperatureColor(json.main.temp),
    new Date ()
  );
}

function getTemperatureColor (temp)
{
  switch (true) {
    case temp > 15 && temp < 25:
      return 'orange';
    case temp > 25:
      return 'red';
    default:
      return 'blue';
  }
}

export default CountryMapper;
