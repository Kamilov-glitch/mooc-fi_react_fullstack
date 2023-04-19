import axios from "axios"
import Country from './Country'
import { useState } from "react"

const Countries = ({ countries, showCountry }) => {

    if (countries.length <= 1) {
        return null
    }

    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }
    else {
        return (
            countries.map(country => {
                return (
                    <div key={country}>
                        {country}<button onClick={() => showCountry(country)}>show</button>
                    </div>
                )
            })
        )
    }
}

export default Countries