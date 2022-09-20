import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';
import FilterName from './FilterName';

function Table() {
  const { planets, filter: { filters } } = useContext(ContextPlanets);
  const { filterByName: { name } } = filters;
  // console.log(planets);
  return (
    <div>
      <FilterName />
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
          { planets
            .filter((value) => value.name.toLowerCase().includes(name.toLowerCase()))
            .map((e) => (
              <tr key={ e.name }>
                <td>{ e.name }</td>
                <td>{ e.rotation_period }</td>
                <td>{ e.orbital_period }</td>
                <td>{ e.diameter }</td>
                <td>{ e.climate }</td>
                <td>{ e.gravity }</td>
                <td>{ e.terrain }</td>
                <td>{ e.surface_water }</td>
                <td>{ e.population }</td>
                <td>{ e.films.map((el) => <p key={ el }>{ el }</p>) }</td>
                <td>{ e.created }</td>
                <td>{ e.edited }</td>
                <td>{ e.url }</td>
              </tr>
            )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
