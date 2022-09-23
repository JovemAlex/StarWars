import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

function FilterName() {
  const { filterByName, setFilterByName } = useContext(ContextPlanets);

  const handleChangeName = ({ target }) => {
    setFilterByName({ name: target.value });
  };

  return (
    <div>
      <label htmlFor="name">
        { 'Digite o nome do planeta: ' }
        <input
          type="text"
          data-testid="name-filter"
          value={ filterByName.name }
          onChange={ handleChangeName }
          placeholder="Ex.: Tatooine"
        />
      </label>
    </div>
  );
}

export default FilterName;
