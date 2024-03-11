import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCountry } from "../services/countries.js";

function CountriesCreate() {
  const [country, setCountry] = useState({
    name: "",
    capital: "",
    region: "",
    timezone: "",
    language: "",
    population: 0,
    borders: [],
    flag: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createCountry(country);
    navigate("/countries");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCountry((prevCountry) => ({
      ...prevCountry,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Add a country to the database</h1>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Country Name"
            name="name"
            value={country.name}
            onChange={handleChange}
        />
        <input
            type="text"
            placeholder="Capital Name"
            name="capital"
            value={country.capital}
            onChange={handleChange}
        />
        <input
            type="text"
            placeholder="Continent"
            name="region"
            value={country.region}
            onChange={handleChange}
        />
        <input
            type="text"
            placeholder="Timezone"
            name="timezone"
            value={country.timezone}
            onChange={handleChange}
        />
        <input
            type="text"
            placeholder="Language"
            name="language"
            value={country.language}
            onChange={handleChange}
        />
        <input
            type="text"
            placeholder="Population Total"
            name="population"
            value={country.population}
            onChange={handleChange}
        />
        <input
            type="text"
            placeholder="Bordering Countries"
            name="borders"
            value={country.borders}
            onChange={handleChange}
        />
        <input
            type="text"
            placeholder="Flag Image (provide url of image address)"
            name="flag"
            value={country.flag}
            onChange={handleChange}
        />
        <button type="submit">Add your country</button>
      </form>
    </div>
  );
}

export default CountriesCreate;
