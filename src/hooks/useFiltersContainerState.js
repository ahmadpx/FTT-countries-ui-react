import { useState, useEffect } from 'react';
import { autorun, toJS } from 'mobx';

export default function useFiltersContainerState(store) {
  const [state, setState] = useState({});

  useEffect(
    () =>
      autorun(() =>
        setState({
          filters: store.countriesList.countriesStore.filters,
          filtersState: toJS(store.countriesList.filtersState),
          toggleFilter: store.countriesList.toggleFilter,
          resetAllFilters: store.countriesList.resetAllFilters,
          isSelectedFilter: store.countriesList.isSelectedFilter,
        }),
      ),
    [],
  );

  return state;
}
