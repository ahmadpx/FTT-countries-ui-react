import { useState, useEffect } from 'react';
import { autorun } from 'mobx';

export default function useCountriesListContainerState(store) {
  const [state, setState] = useState({ countriesList: [] });

  useEffect(
    () =>
      autorun(() =>
        setState({
          countriesList: store.countriesList,
        }),
      ),
    [],
  );

  return state;
}
