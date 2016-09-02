import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './index';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('default clicked')}>Default</Button>
  ))
  .add('primary', () => (
    <Button onClick={action('primary clicked')} primary>Primary</Button>
  ))
  .add('disabled', () => (
    <Button onClick={action('disabled clicked')} disabled>Disabled</Button>
  ))
  .add('two buttons', () => (
    <div>
      <Button onClick={action('primary clicked')} primary>Primary</Button>
      <Button onClick={action('default clicked')}>Default</Button>
    </div>
  ))
  .add('custom styles', () => (
    <Button
      onClick={action('custom clicked')}
      style={{ borderRadius: '15px', color: 'red', fontFamily: 'Comic Sans MS' }}
    >
      Custom
    </Button>
  ));
