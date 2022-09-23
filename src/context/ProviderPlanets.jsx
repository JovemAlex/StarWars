import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import ContextPlanets from './ContextPlanets';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState({ results: [] });
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((json) => setPlanets(json));
  }, []);

  const contextData = {
    planets,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <ContextPlanets.Provider value={ contextData }>
      { children }
    </ContextPlanets.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: node.isRequired,
};

export default StarWarsProvider;
