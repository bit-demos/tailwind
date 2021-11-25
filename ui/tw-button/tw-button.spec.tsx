import React from 'react';
import { render } from '@testing-library/react';
import { BasicTwButton } from './tw-button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTwButton />);
  const rendered = getByText('Styled By Tailwind');
  expect(rendered).toBeTruthy();
});
