/* eslint-disable */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module).add('default', () => {
  const inputPlaceholder = 'Text here...';
  return <Input placeholder={inputPlaceholder} />
});

