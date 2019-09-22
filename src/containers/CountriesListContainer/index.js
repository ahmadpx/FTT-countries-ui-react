import React, { memo } from 'react';
import useCountriesListContainerState from '../../hooks/useCountriesListContainerState';
import Country from './../../components/Country';
import Loading from './../../components/Loading';
import { Container, Grid } from './CountriesListContainer.styles';

function CountriesListContainer({ store }) {
  const {
    countriesList,
    isFetched,
    isLoading,
  } = useCountriesListContainerState(store);

  return (
    <>
      {isLoading && <Loading />}

      {isFetched && (
        <Container>
          {countriesList.length > 0 ? (
            <>
              {countriesList.map(country => (
                <Grid key={country.name}>
                  <Country country={country} />
                </Grid>
              ))}
            </>
          ) : (
            <p>
              There is no results matching your selected filters, you can reset
              filters to see more results
            </p>
          )}
        </Container>
      )}
    </>
  );
}

export default memo(CountriesListContainer);
