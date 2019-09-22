import { useState, useEffect } from 'react';
import { autorun } from 'mobx';

export default function useCountriesListContainerState(store) {
  const [state, setState] = useState({ countriesList: [] });

  useEffect(
    () =>
      autorun(() =>
        setState({
          countriesList: store.countriesList,
          isFetched: store.countriesStore.isFetched,
          isLoading: store.countriesStore.isLoading,
          hasError: store.countriesStore.hasError,
        }),
      ),
    [],
  );

  return state;
}
