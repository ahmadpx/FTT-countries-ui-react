import React, { memo } from 'react';
import useCountriesListContainerState from '../../hooks/useCountriesListContainerState';
import Country from './../../components/Country';
import styled from 'styled-components';
import Loading from './../../components/Loading'
const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-grow:1;
  padding: 0 10px;
`
const Grid = styled.div`
  flex-basis:33.333%;
  padding:0 10px;
  box-sizing:border-box;
`
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
