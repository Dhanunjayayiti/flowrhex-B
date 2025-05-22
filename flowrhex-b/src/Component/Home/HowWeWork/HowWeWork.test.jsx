
import React from 'react';
import { render, screen } from '@testing-library/react';
import HowWeWork from './HowWeWork'; // Adjust path as needed
import '@testing-library/jest-dom';

describe('HowWeWork Component', () => {
  beforeEach(() => {
    render(<HowWeWork />);
  });

  test('renders main section heading', () => {
    expect(screen.getByText(/HOW WE WORK/i)).toBeInTheDocument();
  });

  test('renders the intro paragraph', () => {
    expect(
      screen.getByText(/With the aim to deliver satisfactory and efficient service/i)
    ).toBeInTheDocument();
  });

  test('renders Step 1: CDA/NDA Signing', () => {
    expect(screen.getByText(/1\. CDA\/NDA Signing/i)).toBeInTheDocument();
    expect(
      screen.getByText(/We believe confidentiality is the key to a healthy/i)
    ).toBeInTheDocument();
  });

  test('renders Step 2: Data Gathering and On paper discussions', () => {
    expect(screen.getByText(/2\. Data Gathering and On paper discussions/i)).toBeInTheDocument();
    expect(screen.getByText(/we chose and we chose the projects/i)).toBeInTheDocument();
  });

  test('renders Step 3: Deciding Achievable and inline work', () => {
    expect(screen.getByText(/3\. Deciding Achievable and inline work/i)).toBeInTheDocument();
    expect(screen.getByText(/feasibility testing, optimization/i)).toBeInTheDocument();
  });

  test('renders Step 4: Customer Delight is our Motto!', () => {
    expect(screen.getByText(/4\. Customer Delight is our Motto!/i)).toBeInTheDocument();
    expect(screen.getByText(/value your time, money and inputs/i)).toBeInTheDocument();
  });
});
