import React, { memo } from 'react';
import useFiltersContainerState from '../../hooks/useFiltersContainerState';
import FilterGroup from '../../components/FilterGroup';
import { Filters, ResetBtn } from './FiltersContainer.styles';

function FiltersContainer({ store }) {
  const {
    filters,
    toggleFilter,
    resetAllFilters,
    isSelectedFilter,
  } = useFiltersContainerState(store);

  return (
    <Filters>
      {filters && (
        <>
          <h2>Filters</h2>

          <FilterGroup
            title={'language'}
            toggleFilter={toggleFilter}
            filtersData={filters.languages}
            isSelectedFilter={isSelectedFilter}
          />

          <FilterGroup
            title={'currency'}
            toggleFilter={toggleFilter}
            filtersData={filters.currencies}
            isSelectedFilter={isSelectedFilter}
          />

          <FilterGroup
            title={'region'}
            toggleFilter={toggleFilter}
            filtersData={filters.regions}
            isSelectedFilter={isSelectedFilter}
          />
          <ResetBtn onClick={resetAllFilters}>reset all filters</ResetBtn>
        </>
      )}
    </Filters>
  );
}

export default memo(FiltersContainer);
