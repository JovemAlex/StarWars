import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import ContextPlanets from './ContextPlanets';

function ProviderPlanets({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      const results = data.results.map((e) => {
        delete e.residents;
        return e;
      });
      setPlanets(results);
    };
    fetchApi();
  }, []);

  const context = {
    planets,
  };

  return (
    <ContextPlanets.Provider value={ context }>
      { children }
    </ContextPlanets.Provider>
  );
}

ProviderPlanets.propTypes = {
  children: node.isRequired,
};

export default ProviderPlanets;
