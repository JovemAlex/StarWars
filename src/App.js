import React from 'react';
import './App.css';
import Table from './components/Table';
import ProviderPlanets from './context/ProviderPlanets';

function App() {
  return (
    <ProviderPlanets>
      <Table />
    </ProviderPlanets>
  );
}

export default App;
