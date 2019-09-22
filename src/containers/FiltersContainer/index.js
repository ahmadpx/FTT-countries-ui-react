import React, { memo, useState } from 'react';
import useFiltersContainerState from '../../hooks/useFiltersContainerState';
import FilterGroup from '../../components/FilterGroup';
import styled from 'styled-components';
import earth from './../../loading.gif';
const Filters = styled.aside`
  min-width:250px;
  padding-right:0 30px 0 0 ;
  padding: 0 10px;

`
const Logo = styled.div`
  display:block;
  text-align:center;
  width:100%;
  height:150px;
  background-image:${props => `url("${props.img}")`};
  background-position:center;
  background-repeat:no-repeat;
  background-size: auto 200px;
  
`
const ResetBtn = styled.button`
  display:flex;
  height:40px;
  background:#333;
  color:white;
  justify-content:center;
  align-items:center;
  width:100%;
  margin-top:20px;
  font-size:16px;
  cursor:pointer;
`
function FiltersContainer({ store }) {
  const {
    filters,
    toggleFilter,
    resetAllFilters,
    isSelectedFilter,
    filtersState
  } = useFiltersContainerState(store);

  return (
    <>
      <Filters>
        <Logo img={earth} />

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
    </>
  );
}

export default memo(FiltersContainer);
