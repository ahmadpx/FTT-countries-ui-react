import { useState, useEffect } from 'react';
import { autorun } from 'mobx';

export default function useCountriesListContainerState(store) {
  const [state, setState] = useState({ countriesList: [] });

  useEffect(
    () =>
      autorun(() =>
        setState({
          countriesList: store.countriesList.countriesList,
          isFetched: store.countriesList.countriesStore.isFetched,
          isLoading: store.countriesList.countriesStore.isLoading,
          hasError: store.countriesList.countriesStore.hasError,
        }),
      ),
    [],
  );

  return state;
}
