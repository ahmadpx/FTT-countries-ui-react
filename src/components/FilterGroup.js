import React from 'react';
import Filter from './Filter';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  padding-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 3px;
`;
const FilterTitle = styled.h5`
  margin: 0 10px 15px;
  font-size: 18px;
`;
export default function FilterGroup({
  title,
  filtersData,
  toggleFilter,
  isSelectedFilter,
}) {
  return (
    filtersData &&
    filtersData.length > 0 && (
      <FilterWrapper>
        <FilterTitle>{title}</FilterTitle>
        <>
          {filtersData.slice(0, 10).map(filter => (
            <Filter
              key={filter.value}
              filter={filter}
              isSelectedFilter={isSelectedFilter}
              toggleFilter={toggleFilter}
            />
          ))}
        </>
      </FilterWrapper>
    )
  );
}
