import { useState, useEffect } from 'react';
import { autorun } from 'mobx';

export default function useFiltersContainerState(store) {
  const [state, setState] = useState({});

  useEffect(
    () =>
      autorun(() =>
        setState({
          filters: store.countriesStore.filters,
          filtersState: store.filtersState,
          toggleFilter: store.toggleFilter,
          resetAllFilters: store.resetAllFilters,
          isSelectedFilter: store.isSelectedFilter,
        }),
      ),
    [],
  );

  return state;
}
