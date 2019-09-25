import React, { useEffect } from 'react';
import CountriesListContainer from './containers/CountriesListContainer';
import FiltersContainer from './containers/FiltersContainer';
import { Layout, GlobalStyle, FrameworkPadge } from './App.styles';
import reactIcon from './logo.svg';
function App({ store }) {
  useEffect(() => {
    store.countriesStore.fetch(function onError(error) {
      console.error(error);
    });
  }, []);

  return (
    <>
      <FrameworkPadge>
        <img src={reactIcon} />
      </FrameworkPadge>
      <GlobalStyle />
      <Layout className="App">
        <FiltersContainer store={store} />
        <CountriesListContainer store={store} />
      </Layout>
    </>
  );
}

export default App;
