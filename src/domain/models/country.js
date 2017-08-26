class Country
{
  constructor (id, name, temperature) {
    this.id = id;
    this.name = name;
    this.temperature = temperature;
  }
}

function CountryMapper (json)
{
  return new Country(
    json.id,
    json.name,
    json.main.temp
  );
}

export default CountryMapper;
