import React, { useState } from "react";
import './Country.css'

const Country = ({ country, handelVisitedCountries, handelVisitedFlags }) => {
//   console.log(country);
const [visited, setVisited] = useState(false);
  const handelVisited = () => {
    // if(visited){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }
    setVisited(!visited);
    
    handelVisitedCountries(country);
  }
  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name : {country.name.common}</h3>
      <p>Popolation : {country.population.population}</p>
      <p>Area : {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
      <button onClick={handelVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => { handelVisitedFlags(country.flags.flags.png)}}>Add Visited Flags</button>
    </div>
  );
};

export default Country;
