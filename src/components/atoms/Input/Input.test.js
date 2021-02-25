import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

describe('<Input />', () => {
  test('it should mount', () => {
    render(<Input />);

    const input = screen.getByTestId('Input');

    expect(input).toBeInTheDocument();
  });

  it('Snapshot', () => {
    const { asFragment } = render(
      <Input type="text" placeholder="Placeholder test" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
