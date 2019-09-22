import React, { memo } from 'react';
import useCountriesListContainerState from '../../hooks/useCountriesListContainerState';

function CountriesListContainer({ store }) {
  const { countriesList } = useCountriesListContainerState(store);

  return (
    <ul>
      {countriesList.map(country => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default memo(CountriesListContainer);
