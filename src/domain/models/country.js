class Country
{
  constructor (id, name, temperature, temperatureFormated) {
    this.id = id;
    this.name = name;
    this.temperature = temperature;
    this.temperatureFormated = temperatureFormated;
  }
}

function CountryMapper (json)
{
  return new Country(
    json.id,
    json.name,
    json.main.temp,
    Math.round((json.main.temp * 100)/45)
  );
}

export default CountryMapper;
