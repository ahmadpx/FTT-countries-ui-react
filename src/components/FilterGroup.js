import React from 'react';

export default function FilterGroup({
  title,
  filtersData,
  toggleFilter,
  isSelectedFilter,
}) {
  return (
    filtersData &&
    filtersData.length > 0 && (
      <div>
        <h3>{title}</h3>
        <div>
          {filtersData.slice(0, 10).map(filter => (
            <div key={filter.value}>
              <input
                id={filter.value}
                type="checkbox"
                checked={isSelectedFilter(filter)}
                onChange={() => toggleFilter(filter)}
              />

              <label htmlFor={filter.value}>
                <span>{filter.value}</span>
                <span>({filter.count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
