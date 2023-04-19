import axios from "axios";
import Countries from "./components/Countries";
import Country from "./components/Country";
import { useState, useEffect } from "react";

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const baseUrl = 'https://restcountries.com/v3.1/all'

  const searchHandler = (event) => {
    setSearchText(event.target.value)
  }

  useEffect(() => {
      axios
      .get(baseUrl)
      .then(response => {
        console.log('response', response)
        setAllCountries(response.data)
        console.log('allCountries', allCountries)
      })
  },[])

  useEffect(() => {
    const filteredCountries = allCountries
        .filter(country => country.name.common.toLowerCase().includes(searchText.toLowerCase()))
      console.log('filtered', filteredCountries)
    setCountries(filteredCountries)
  }, [searchText])

  const showCountry = (countryName) => {
    setCountries(countries.filter(country => country.name.common === countryName))
    }

  const renderCountries = () => {
    if (countries.length === 1) {
      const {
          area,
          capital,
          flags: {
            png
          },
          languages,
          name: {
            common
          }
        } = countries[0]
  
        return (
          <Country name={common} capital={capital} area={area} languages={Object.values(languages)} flag={png} />
        )
    }

    return <Countries countries={countries.map(country => country.name.common)} showCountry={showCountry}/>
  }

  return (
    <div className="App">
      find countries: <input onChange={searchHandler} value={searchText}/>
      {renderCountries()}
    </div>
  );
}

export default App;
