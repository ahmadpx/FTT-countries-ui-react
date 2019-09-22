import React, { useEffect } from 'react';
import CountriesListContainer from './containers/CountriesListContainer';
import FiltersContainer from './containers/FiltersContainer';

function App({ store }) {
  useEffect(() => {
    store.countriesStore.fetch(function onError(error) {
      console.error(error);
    });
  }, []);

  return (
    <div className="App" style={{ display: 'flex' }}>
      <FiltersContainer store={store} />
      <CountriesListContainer store={store} />
    </div>
  );
}

export default App;
