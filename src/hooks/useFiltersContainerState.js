import { useState, useEffect } from 'react';
import { autorun, toJS } from 'mobx';

export default function useFiltersContainerState(store) {
  const [state, setState] = useState({});

  useEffect(
    () =>
      autorun(() =>
        setState({
          filters: store.countriesStore.filters,
          filtersState: toJS(store.filtersState),
          toggleFilter: store.toggleFilter,
          resetAllFilters: store.resetAllFilters,
          isSelectedFilter: store.isSelectedFilter,
        }),
      ),
    [],
  );

  return state;
}
