import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import List from './index';

const options = [
  { value: 1, description: 'One' },
  { value: 2, description: 'Two' },
  { value: 3, description: 'Three' },
  { value: 4, description: 'Four' },
  { value: 5, description: 'Five' },
  { value: 6, description: 'Six' },
  { value: 7, description: 'Seven' },
  { value: 8, description: 'Eight' },
  { value: 9, description: 'Nine' },
  { value: 10, description: 'Ten' }
];

storiesOf('List', module)
  .add('default', () => (
    <List
      options={options}
      value={2}
      onChange={action('default changed')}
      onDoubleClick={action('default double click')}
    />
  ))
  .add('with scroll', () => (
    <List
      options={options}
      value={3}
      style={{ height: '120px' }}
      onChange={action('with scroll changed')}
      onDoubleClick={action('with scroll double click')}
    />
  ))
  .add('custom styles', () => (
    <List
      options={options}
      value={6}
      style={{ width: '200px', border: 'solid 3px blue', borderRadius: '10px' }}
      onChange={action('custom styles changed')}
      onDoubleClick={action('custom styles double click')}
    />
  ));
