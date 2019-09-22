import React, { memo } from 'react';
import useCountriesListContainerState from '../../hooks/useCountriesListContainerState';
import Country from './../../components/Country';
import Loading from './../../components/Loading'
import {
  Container,
  Grid
} from './CountriesListContainer.styles'
function CountriesListContainer({ store }) {
  const { countriesList } = useCountriesListContainerState(store);

  return (
    <>
      {countriesList.length === 0 && <Loading />}
      <Container>
        {countriesList.map(country => (
          <Grid><Country key={country.name} country={country} /></Grid>
        ))}
      </Container>
    </>
  );
}

export default memo(CountriesListContainer);
