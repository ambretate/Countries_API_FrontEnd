import { useState, useEffect } from "react";
import { getCountry, deleteCountry } from "../services/countries.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./CountriesDetail.css";

function CountriesDetail() {
  const [country, setCountry] = useState({});

  let { id } = useParams();
  let navigate = useNavigate();

  const fetchCountry = async () => {
    const singleCountry = await getCountry(id);
    setCountry(singleCountry);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  const handleDelete = async () => {
    await deleteCountry(id);
    navigate("/countries");
  };

  return (
    <div className="country-detail">
      <h1 className="country-detail-name">{country.name}</h1>
      <img
        className="country-detail-image"
        src={country.flag}
        alt={country.name}
      />
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Language: {country.language}</p>
      <p>Pouplation: {country.population}</p>
      <p>Borders: {country.borders}</p>
      <p>Timezone: {country.timezone}</p>
      <div>
        <Link to={`/countries/${id}/edit`}>
          <button>Edit Country Info</button>
        </Link>
        <button onClick={handleDelete}>Remove Country Info</button>
      </div>
    </div>
  );
}

export default CountriesDetail;
