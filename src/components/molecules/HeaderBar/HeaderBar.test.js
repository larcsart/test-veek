import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderBar from './HeaderBar';

describe('<HeaderBar />', () => {
  test('it should mount', () => {
    render(<HeaderBar />);
    
    const headerBar = screen.getByTestId('HeaderBar');

    expect(headerBar).toBeInTheDocument();
  });
});