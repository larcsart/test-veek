import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Screen from './Screen';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('<Screen />', () => {
  test('it should mount', () => {
    useRouter.mockImplementationOnce(() => ({
      query: { q: 'tenis' },
    }));

    render(
      <Screen title="Screen title">
        <div />
      </Screen>,
    );

    const screenComponent = screen.getByTestId('Screen');

    expect(screenComponent).toBeInTheDocument();
  });
});
