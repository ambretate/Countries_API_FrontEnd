import { useState, useEffect } from "react"
import { getCountry, deleteCountry } from "../services/countries.js"
import { Link, useParams, useNavigate } from "react-router-dom"

function CountriesDetail() {
    const [country, setCountry] = useState ({})

    let { id } = useParams()
    let navigate = useNavigate()

    const fetchCountry = async () => {
        const singleCountry = await getCountry(id)
        setCountry(singleCountry)
    }

    useEffect(() => {
        fetchCountry()
    }, [])

    const handleDelete = async () => {
        await deleteCountry(id)
        navigate("/countries")
    }

  return (
    <div>
        <h1>{country.name}</h1>
        <img src={country.flag} alt={country.name} />
        <p>{country.capital}</p>
        <p>{country.region}</p>
        <p>{country.language}</p>
        <p>{country.population}</p>
        <p>{country.borders}</p>
        <p>{country.timezone}</p>
        <div>
            <Link to={`/countries/${id}/edit`}>
                <button>Edit Country Info</button>
            </Link>
            <button onClick={handleDelete} >Remove Country Info</button>
        </div>
    </div>
  )
}

export default CountriesDetail