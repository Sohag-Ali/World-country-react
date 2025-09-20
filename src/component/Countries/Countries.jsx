import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ countriesPromies }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  const handelVisitedCountries = (country) => {
    // console.log("visitedCountries", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }
  const handelVisitedFlags = (flag) => {
    // console.log("visitedFlags", flag);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  }
  const countriesData = use(countriesPromies);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h1>Country : {countries.length}</h1>
      <h3>Total Country Visited : {visitedCountries.length}</h3>
      <h3>Total Visited Flags : {visitedFlags.length}</h3>
      <ol>
        {
          visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
        }
      </ol>
        
      <div className="visited-flag-container">
        {
          visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
        }
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}
          handelVisitedCountries={handelVisitedCountries}
          handelVisitedFlags={handelVisitedFlags}>
            
          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
