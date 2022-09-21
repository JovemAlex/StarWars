import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

const FilterName = () => {
  const { filterByName, setFilterByName } = useContext(ContextPlanets);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterByName({ name: value });
  };

  return (
    <div>
      <label htmlFor="filter">
        { 'Digite o nome do planeta: ' }
        <input
          type="text"
          name="filter"
          data-testid="name-filter"
          placeholder="Ex.: Tatooine"
          value={ filterByName.name }
          onChange={ handleChange }
        />
      </label>
    </div>
  );
};

export default FilterName;
