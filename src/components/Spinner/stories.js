import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Spinner from './index';

storiesOf('Spinner', module)
  .add('default', () => (
    <Spinner />
  ));
