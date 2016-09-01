import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DropDownList from './index';

const items = [
  { id: 1, text: 'option 1' },
  { id: 2, text: 'option 2' },
  { id: 3, text: 'option 3' }
];

storiesOf('DropDownList', module)
  .add('default', () => (
    <DropDownList
      options={items}
      textKey="text"
      valueKey="id"
      onChange={action('default change')}
    />
  ))
  .add('default value', () => (
    <DropDownList
      defaultValue={2}
      options={items}
      textKey="text"
      valueKey="id"
      onChange={action('default value change')}
    />
  ))
  .add('error', () => (
    <DropDownList
      options={items}
      textKey="text"
      valueKey="id"
      error
      onChange={action('error change')}
    />
  ))
  .add('custom styles', () => (
    <DropDownList
      options={items}
      textKey="text"
      valueKey="id"
      style={{ border: 'solid 3px red', borderRadius: '15px' }}
      onChange={action('error change')}
    />
  ));
