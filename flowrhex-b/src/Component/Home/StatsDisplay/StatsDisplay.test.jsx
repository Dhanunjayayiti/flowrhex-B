
import React from 'react';
import { render, screen } from '@testing-library/react';
import StatsDisplay from './StatsDisplay'; 
import '@testing-library/jest-dom';

describe('StatsDisplay Component', () => {
  beforeEach(() => {
    render(<StatsDisplay />);
  });

  test('renders "Overall years of experience"', () => {
    expect(screen.getByText('32')).toBeInTheDocument();
  });

  test('renders "Number projects completed"', () => {
    expect(screen.getByText(/Number projects completed/i)).toBeInTheDocument();
  });

  test('renders "Number of projects in progress"', () => {
    expect(screen.getByText(/Number of projects in progress/i)).toBeInTheDocument();
  });

  test('renders "Startup Competition Finalists and Awards"', () => {
    expect(screen.getByText(/Startup Competition Finalists and Awards/i)).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  test('renders "Government Grant"', () => {
    expect(screen.getByText(/Government Grant/i)).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
