import React, { useContext, useState, useEffect } from 'react';
import ContextPlanets from '../context/ContextPlanets';

const optionsDisponiveis = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function FilterValue() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(ContextPlanets);
  const [columnValue, setColumnValue] = useState('population');
  const [comparisonValue, setComparisonValue] = useState('maior que');
  const [filterValue, setFilterValue] = useState(0);

  const FilterBtnHandleClick = () => {
    setFilterByNumericValues((prevState) => [
      ...prevState,
      {
        column: columnValue,
        comparison: comparisonValue,
        value: parseInt(filterValue, 10),
      }]);
  };

  const optionSelected = (option) => (filterByNumericValues
    .some((findOption) => findOption.column === option));

  const optionNoSelected = optionsDisponiveis.filter((f) => !optionSelected(f));
  const firstOption = optionNoSelected[0];

  useEffect(() => {
    setColumnValue(firstOption);
  }, [filterByNumericValues.length, firstOption]); /* eslint-disable-line react-hooks/exhaustive-deps */
  // Ref:
  // How do I configure eslint rules to ignore react-hooks/exhaustive-deps globally?
  // https://stackoverflow.com/questions/65704653/how-do-i-configure-eslint-rules-to-ignore-react-hooks-exhaustive-deps-globally

  return (
    <div>
      <label htmlFor="column">
        {'Selecione a Coluna: '}
        <select
          name="column"
          id="column"
          data-testid="column-filter"
          value={ columnValue }
          onChange={ ({ target }) => setColumnValue(target.value) }
        >
          { optionNoSelected.map((e) => (
            <option
              key={ e }
              value={ e }
            >
              {e}
            </option>
          ))}
        </select>
      </label>
      { ' ' }
      <label htmlFor="comparison">
        { 'Selecione qual será a comparação: ' }
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          value={ comparisonValue }
          onChange={ ({ target }) => setComparisonValue(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      { ' ' }
      <label htmlFor="filterValue">
        { 'Valor para comparação: ' }
        <input
          type="number"
          data-testid="value-filter"
          id="filterValue"
          value={ filterValue }
          onChange={ ({ target }) => setFilterValue(target.value) }
        />
      </label>
      {' '}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ FilterBtnHandleClick }
      >
        Filtrar
      </button>

    </div>
  );
}

export default FilterValue;
