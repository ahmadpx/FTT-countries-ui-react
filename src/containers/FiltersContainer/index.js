import React, { memo, useState } from 'react';
import useFiltersContainerState from '../../hooks/useFiltersContainerState';
import FilterGroup from '../../components/FilterGroup';

function FiltersContainer({ store }) {
  const {
    filters,
    toggleFilter,
    resetAllFilters,
    isSelectedFilter,
    filtersState
  } = useFiltersContainerState(store);
  
  return (
    <div>
      {filters && (
        <>
          <button onClick={resetAllFilters}>reset all filters</button>

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
        </>
      )}
    </div>
  );
}

export default memo(FiltersContainer);
