import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetails = ({ countryName }) => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (countryName) {
      const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;

      axios.get(apiUrl)
        .then(response => {
          const countryData = response.data[0];
          setCountryData(countryData);
        })
        .catch(error => {
          console.error('Error fetching country data:', error);
        });
    }
  }, [countryName]);

  if (!countryData) {
    return <div>No country selected</div>;
  }

  return (
    <div>
      {/* Display country-specific details */}
      <h2>{countryData.name.common}</h2>
      <p>Capital: {countryData.capital}</p>
      <p>Population: {countryData.population}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CountryDetails;
