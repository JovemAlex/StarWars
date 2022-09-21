import React, { useContext, useState } from 'react';
import ContextPlanets from '../context/ContextPlanets';

function FilterNumber() {
  const { setFilterByNumericValues } = useContext(ContextPlanets);
  const [columnValue, setColumnValue] = useState('population');
  const [comparisonValue, setComparisonValue] = useState('maior que');
  const [filterValue, setFilterValue] = useState(0);

  const handleClick = () => {
    // console.log('cliquei');
    setFilterByNumericValues([{
      column: columnValue,
      comparison: comparisonValue,
      value: filterValue,
    }]);
  };

  return (
    <div>
      <label htmlFor="column">
        { 'Selecione a coluna: ' }
        <select
          name="column"
          id="column"
          data-testid="column-filter"
          value={ columnValue }
          onChange={ (e) => setColumnValue(e.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="comparison">
        { 'Selecione qual será a comparação: ' }
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          value={ comparisonValue }
          onChange={ (e) => setComparisonValue(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="filterValue">
        { 'Valor para comparação: ' }
        <input
          type="number"
          id="filterValue"
          data-testid="value-filter"
          value={ filterValue }
          onChange={ (e) => setFilterValue(e.target.value) }
        />
      </label>
      { ' ' }
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterNumber;
