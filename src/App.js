import React from 'react';
import './App.css';
import Table from './components/Table';
import ProviderPlanets from './context/ProviderPlanets';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumberr';

function App() {
  return (
    <ProviderPlanets>
      <FilterNumber />
      <FilterName />
      <Table />
    </ProviderPlanets>
  );
}

export default App;
