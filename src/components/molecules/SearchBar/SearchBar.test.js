import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  test('it should mount', () => {
    render(<SearchBar />);

    const searchBar = screen.getByTestId('SearchBar');

    expect(searchBar).toBeInTheDocument();
  });

  test('snapshot', () => {
    const { asFragment } = render(
      <SearchBar />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should call onSubmit', () => {
    const onSubmit = jest.fn();
    render(
      <SearchBar onSubmit={onSubmit} />,
    );
    const searchBar = screen.getByTestId('SearchBar');

    fireEvent.submit(searchBar);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
