import React from 'react';
import './App.css';
import Table from './components/Table';
import ProviderPlanets from './context/ProviderPlanets';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';

function App() {
  return (
    <ProviderPlanets>
      <FilterName />
      <FilterNumber />
      <Table />
    </ProviderPlanets>
  );
}

export default App;
