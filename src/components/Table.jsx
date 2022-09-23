import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

function Table() {
  const { planets, filterByName, filterByNumericValues } = useContext(ContextPlanets);

  let planetsFilter = planets.results
    .filter((value) => value.name.includes(filterByName.name));

  filterByNumericValues.forEach(({ column, comparison, value }) => {
    planetsFilter = planetsFilter.filter((planet) => {
      if (comparison === 'maior que') {
        return parseInt(planet[column], 10) > value;
      } if (comparison === 'menor que') {
        return parseInt(planet[column], 10) < value;
      }
      return parseInt(planet[column], 10) === value;
    });
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>

        <tbody>
          { planetsFilter.map((e, index) => (
            <tr key={ index }>
              <td>{ e.name }</td>
              <td>{ e.rotation_period }</td>
              <td>{ e.orbital_period }</td>
              <td>{ e.diameter }</td>
              <td>{ e.climate }</td>
              <td>{ e.gravity }</td>
              <td>{ e.terrain }</td>
              <td>{ e.surface_water }</td>
              <td>{ e.population }</td>
              <td>{ e.films.map((el, i) => <p key={ i }>{ el }</p>) }</td>
              <td>{ e.created }</td>
              <td>{ e.edited }</td>
              <td>{ e.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
