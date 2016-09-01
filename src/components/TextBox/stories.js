import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TextBox from './index';

storiesOf('TextBox', module)
  .add('default', () => (
    <TextBox
      onChange={action('default change')}
      onBlur={action('default blur')}
    />
  ))
  .add('default value', () => (
    <TextBox
      defaultValue="default..."
      onChange={action('default value change')}
      onBlur={action('default value blur')}
    />
  ))
  .add('error', () => (
    <TextBox
      error
      onChange={action('error change')}
      onBlur={action('error blur')}
    />
  ))
  .add('custom styles', () => (
    <TextBox
      style={{ color: 'red', borderRadius: '15px' }}
      onChange={action('custom styles change')}
      onBlur={action('custom styles blur')}
    />
  ));
