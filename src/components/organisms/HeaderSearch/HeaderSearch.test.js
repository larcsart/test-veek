import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderSearch from './HeaderSearch';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('<HeaderSearch />', () => {
  beforeEach(() => {
    useRouter.mockImplementationOnce(() => ({
      query: { q: 'tenis' },
    }));
  });
  test('it should mount', () => {
    render(<HeaderSearch />);

    const headerSearch = screen.getByTestId('HeaderSearch');

    expect(headerSearch).toBeInTheDocument();
  });

  test('it should input has value', () => {
    render(<HeaderSearch />);
    const headerSearch = screen.getByTestId('HeaderSearch');
    const input = headerSearch.querySelector('input');
    expect(input.value).toBe('tenis');
  });

  test('snapshot', () => {
    const { asFragment } = render(
      <HeaderSearch />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
