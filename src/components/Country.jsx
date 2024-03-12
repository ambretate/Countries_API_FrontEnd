import { Link } from "react-router-dom";

function Country({ country }) {
  return (
    <div className="opacity">
      <Link to={`/countries/${country._id}`}>
        <img className="flag" src={country.flag} alt={country.name} />
        <p className="flag">{country.name}</p>
      </Link>
    </div>
  );
}

export default Country;
