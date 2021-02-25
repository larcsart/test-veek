import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProgressiveImage from './ProgressiveImage';

describe('<ProgressiveImage />', () => {
  test('it should mount', () => {
    render(<ProgressiveImage src="blah.png" alt="blah" />);

    const progressiveImage = screen.getByTestId('ProgressiveImage');

    expect(progressiveImage).toBeInTheDocument();
  });
});
