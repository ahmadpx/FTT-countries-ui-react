import React, { useEffect } from 'react';
import CountriesListContainer from './containers/CountriesListContainer';
import FiltersContainer from './containers/FiltersContainer';
import styled, { createGlobalStyle } from 'styled-components';

const Layout = styled.div`
  display:flex;
  max-width:1200px;
  margin:auto;
  padding-top:40px;
`
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  body{
    font-family: 'Ubuntu', sans-serif;
    background:rgba(0,0,0,0.02);
  }
`


function App({ store }) {
  useEffect(() => {
    store.countriesStore.fetch(function onError(error) {
      console.error(error);
    });
  }, []);

  return (
    <>

      <GlobalStyle />
      <Layout className="App">
        <FiltersContainer store={store} />
        <CountriesListContainer store={store} />
      </Layout>
    </>
  );
}

export default App;
