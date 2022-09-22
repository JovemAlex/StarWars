import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import MOCK from './MOCK';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK)
  }))
})

const renderTestId = async (testid) => {
  const getTestId = screen.getByTestId(testid);
  expect(getTestId).toBeInTheDocument();

  if(testid === 'name-filter') {
    userEvent.type(getTestId, 'Tatoo');
  } else if(testid === 'column-filter') {
    userEvent.selectOptions(getTestId, 'population');
    userEvent.selectOptions(getTestId, 'orbital_period');
    userEvent.selectOptions(getTestId, 'rotation_period');
  } else if(testid === 'comparison-filter') {
    userEvent.selectOptions(getTestId, 'maior que');
  } else if(testid === 'value-filter') {
    userEvent.type(getTestId, '1000');
  } else {
    userEvent.click(getTestId);
  }
}

describe('Testa a renderização do elemetos com "TestId" e elementos de texto', () => {
  test('Testa Renderização dos elementos com "TestId"', async () => {
    render(<App />);
    const elements = [
      'column-filter',
      'comparison-filter',
      'value-filter',
      'name-filter',
      'button-filter',
    ];

  
    elements.map((e) => renderTestId(e));
  });
});

describe('Teste se a aplicação faz requisição a API', () => {
  test('Testa API', async () => {
    render(<App />);

    const endpoit = 'https://swapi.dev/api/planets';
    const tatooine = await screen.findByText(/Tatooine/i);

    expect(tatooine).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledWith(endpoit);
  })
});

describe('table', () => {
  test('maior que', async () => {
    render(<App />);

    const column = screen.getByTestId('column-filter');
    expect(column).toBeInTheDocument()
    userEvent.selectOptions(column, 'population');

    const comparison = screen.getByTestId('comparison-filter');
    expect(column).toBeInTheDocument()
    userEvent.selectOptions(comparison, 'maior que');
    
    const value = screen.getByTestId('value-filter');
    expect(column).toBeInTheDocument()
    userEvent.type(value, '100000');

    const button = screen.getByTestId('button-filter');
    expect(column).toBeInTheDocument()
    userEvent.click(button);

    const text = await screen.findByText(/Alderaan/i);
    expect(text).toBeInTheDocument();

  });

  test('menor que', async () => {
    render(<App />);

    const column = screen.getByTestId('column-filter');
    expect(column).toBeInTheDocument()
    userEvent.selectOptions(column, 'surface_water');

    const comparison = screen.getByTestId('comparison-filter');
    expect(column).toBeInTheDocument()
    userEvent.selectOptions(comparison, 'menor que');
    
    const value = screen.getByTestId('value-filter');
    expect(column).toBeInTheDocument()
    userEvent.type(value, '5');

    const button = screen.getByTestId('button-filter');
    expect(column).toBeInTheDocument()
    userEvent.click(button);

    const text = await screen.findByText(/bespin/i);
    expect(text).toBeInTheDocument();
  });

  test('igual a', async () => {
    render(<App />);

    const column = screen.getByTestId('column-filter');
    expect(column).toBeInTheDocument()
    userEvent.selectOptions(column, 'diameter');

    const comparison = screen.getByTestId('comparison-filter');
    expect(column).toBeInTheDocument()
    userEvent.selectOptions(comparison, 'igual a');
    
    const value = screen.getByTestId('value-filter');
    expect(column).toBeInTheDocument()
    userEvent.type(value, '7200');

    const button = screen.getByTestId('button-filter');
    expect(column).toBeInTheDocument()
    userEvent.click(button);

    const text = await screen.findByText(/Hoth/i);
    expect(text).toBeInTheDocument();
  });
})