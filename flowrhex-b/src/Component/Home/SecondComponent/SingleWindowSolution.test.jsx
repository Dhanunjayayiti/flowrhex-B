
import React from 'react';
import { render, screen } from '@testing-library/react';
import SingleWindowsSolutions from './SingleWindowSolution'; // Adjust path
import '@testing-library/jest-dom';

describe('SingleWindowsSolutions Component', () => {
  beforeEach(() => {
    render(<SingleWindowsSolutions />);
  });

  test('renders main heading', () => {
    expect(screen.getByText(/SINGLE WINDOW SOLUTION WITH FLOW CHEMISTRY AND PROCESS INTENSIFICATION/i)).toBeInTheDocument();
  });

  test('renders subtitle/description', () => {
    expect(screen.getByText(/FlowRHEX ® offers unique solutions based on flow chemistry/i)).toBeInTheDocument();
  });

  test('renders all 3 solution cards', () => {
    expect(screen.getByText(/When you know, what you need/i)).toBeInTheDocument();
    expect(screen.getByText(/When you want to develop in flow/i)).toBeInTheDocument();
    expect(screen.getByText(/Intensifying only reaction is not enough/i)).toBeInTheDocument();
  });

  test('renders all call-to-action buttons', () => {
    expect(screen.getByRole('button', { name: /Customized Products/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Process Development/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /View All/i })).toBeInTheDocument();
  });

  test('renders icons for each card (visually or by alt text if img used)', () => {
  });
});
