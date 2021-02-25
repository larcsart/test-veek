import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchButton from './SearchButton';

const stories = storiesOf('SearchButton', module);

stories.add('default', () => (
  <SearchButton />
));
