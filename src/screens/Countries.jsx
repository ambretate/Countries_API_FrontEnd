import { useState, useEffect } from 'react'
import { getCountries } from "../services/countries.js"
import Country from "../components/Country.jsx"
import "./Countries.css"


function Countries() {
    const [countries, setCountries] = useState ([])

    async function fetchCountries() {
        const allCountries = await getCountries()
        setCountries(allCountries)
    }

    useEffect(() => {
        fetchCountries()
    }, [])

  return (
    <div className='countries-container'>
      {
        countries.map((country) => (
            <Country country={country} key={country._id} />
        ))
      }
    </div>
  );
}

export default Countries;