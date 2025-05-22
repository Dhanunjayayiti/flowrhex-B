
import React from 'react';
import { render, screen } from '@testing-library/react';
import FrHexerModels from './FRHexerModels'; // Adjust path as needed
import '@testing-library/jest-dom';

describe('FrHexerModels Component', () => {
  beforeEach(() => {
    render(<FrHexerModels />);
  });

  test('renders main heading', () => {
    const heading = screen.getByText(/Process Intensification & Flow Chemistry/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders subheading', () => {
    const subheading = screen.getByText(/We are dedicated to make/i);
    expect(subheading).toBeInTheDocument();
  });

  test('renders mission statement', () => {
    const statement = screen.getByText(/Our mission is to make conventional chemical production routes/i);
    expect(statement).toBeInTheDocument();
  });

  test('renders Discover Now button', () => {
    const button = screen.getByRole('button', { name: /Discover Now/i });
    expect(button).toBeInTheDocument();
  });

  test('renders carousel indicators if present', () => {
    const indicators = screen.getAllByRole('button'); // adjust selector if you use aria-labels or test IDs
    expect(indicators.length).toBeGreaterThanOrEqual(1);
  });
});
