import { Link } from "react-router-dom";

function Country({ country }) {
  return (
    <div>
      <Link to={`/countries/${country._id}`}>
        <img className="flag" src={country.flag} alt={country.name} />
      </Link>
    </div>
  );
}

export default Country;
