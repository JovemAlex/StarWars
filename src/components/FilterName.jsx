import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

const FilterName = () => {
  const { filter, setFilter } = useContext(ContextPlanets);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilter({
      ...filter,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <div>
      <label htmlFor="filter">
        <input
          type="text"
          name="filter"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
};

export default FilterName;
