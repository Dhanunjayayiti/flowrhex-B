
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home'; // Adjust the path as needed
import '@testing-library/jest-dom';

describe('Home Page - FRHexeR Glass Series Section', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('renders Glass Series heading', () => {
    expect(screen.getByText(/FRHexeR – Glass Series/i)).toBeInTheDocument();
  });

  test('renders glass series description text', () => {
    expect(
      screen.getByText(/Mass Transfer and Heat Transfer are key drivers/i)
    ).toBeInTheDocument();
  });

  test('renders video element', () => {
  });

  test('renders Learn more button', () => {
    expect(screen.getByRole('button', { name: /Learn more/i })).toBeInTheDocument();
  });
});

describe('Home Page - Why Choose Us Section', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('renders Why Choose Us heading', () => {
  });

  test('renders all 4 feature tiles', () => {
    expect(screen.getByText(/Young Intensification Techies/i)).toBeInTheDocument();
    expect(screen.getByText(/We are a Startup/i)).toBeInTheDocument();
    expect(screen.getByText(/Renowned Experts for back end support/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Vision/i)).toBeInTheDocument();
  });

  test('renders descriptions under each feature', () => {
    expect(screen.getByText(/dedicated to make the technology end to end/i)).toBeInTheDocument();
    expect(screen.getByText(/flexible and adaptable to your needs/i)).toBeInTheDocument();
    expect(screen.getByText(/academic and industrial process intensification/i)).toBeInTheDocument();
    expect(screen.getByText(/create a greener impact over Indian Chemical Industry/i)).toBeInTheDocument();
  });
});
