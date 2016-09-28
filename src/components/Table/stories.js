import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Table from './index';

const defaultColumns = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age', width: 150 },
  { key: 'address', title: 'Address' }
];

const defaultData = [
  { id: 1, name: 'Person 1', age: '25', address: 'Street 1' },
  { id: 2, name: 'Person 2', age: '24', address: 'Street 2' },
  { id: 3, name: 'Person 3', age: '24', address: 'Street 3' },
  { id: 4, name: 'Person 4', age: '32', address: 'Street 4' },
  { id: 5, name: 'Person 5', age: '18', address: 'Street 5' },
  { id: 6, name: 'Person 6', age: '17', address: 'Street 6' },
  { id: 7, name: 'Person 7', age: '49', address: 'Street 7' },
  { id: 8, name: 'Person 8', age: '39', address: 'Street 8' },
  { id: 9, name: 'Person 9', age: '61', address: 'Street 9' }
];

storiesOf('Table', module)
  .add('default', () => (
    <Table
      columns={defaultColumns}
      data={defaultData}
    />
  ))
  .add('with row click', () => (
    <Table
      columns={defaultColumns}
      data={defaultData}
      onRowClick={action('row clicked')}
    />
  ))
  .add('with selection', () => (
    <Table
      columns={defaultColumns}
      data={defaultData}
      selection={[1, 2, 5, 9]}
      onSelectionChange={action('selection changed')}
    />
  ))
  .add('empty', () => (
    <Table
      columns={defaultColumns}
      data={[]}
    />
  ))
  .add('with scroll', () => (
    <div>
      <Table
        columns={defaultColumns}
        data={defaultData.slice(0, 3)}
        style={{ height: '200px', marginBottom: '20px' }}
      />
      <Table
        columns={defaultColumns}
        data={defaultData.slice(0, 3)}
        style={{ height: '154px', marginBottom: '20px' }}
      />
      <Table
        columns={defaultColumns}
        data={defaultData}
        style={{ height: '200px' }}
      />
    </div>
  ))
  .add('custom styles', () => (
    <Table
      columns={defaultColumns}
      data={defaultData}
      style={{ height: '200px', width: '400px', border: 'solid 3px red' }}
    />
  ));
