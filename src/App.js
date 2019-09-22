import React, { useEffect } from 'react';
import CountriesListContainer from './containers/CountriesListContainer';
import FiltersContainer from './containers/FiltersContainer';
import {
  Layout,
  GlobalStyle
} from './App.styles'


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
