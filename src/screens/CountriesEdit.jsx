import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCountry, editCountry } from "../services/countries.js";
import "./CountriesEdit.css";

function CountriesEdit() {
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

  let { id } = useParams();
  let navigate = useNavigate();

  async function fetchCountry() {
    const singleCountry = await getCountry(id);
    setCountry(singleCountry);
  }

  useEffect(() => {
    fetchCountry();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editCountry(id, country);
    navigate(`/countries/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCountry((prevCountry) => ({
      ...prevCountry,
      [name]: value,
    }));
  };

  return (
    <div className="country-edit">
      <h1 className="country-edit-title">Update a country</h1>
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
        <button type="submit">Submit country updates</button>
      </form>
    </div>
  );
}

export default CountriesEdit;
