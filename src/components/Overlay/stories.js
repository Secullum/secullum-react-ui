import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Overlay from './index';

storiesOf('Overlay', module)
  .add('default', () => (
    <Overlay />
  ))
  .add('custom styles', () => (
    <Overlay style={{ backgroundColor: 'red' }} />
  ));
