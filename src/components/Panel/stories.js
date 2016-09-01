import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Panel from './index';
import FormRow from '../FormRow';
import TextBox from '../TextBox';
import Button from '../Button';

storiesOf('Panel', module)
  .add('default', () => (
    <Panel
      icon="sign-in"
      title="Login"
    >
      <FormRow label="User Name" required>
        <TextBox />
      </FormRow>
      <FormRow label="Password" required>
        <TextBox type="password" />
      </FormRow>
    </Panel>
  ))
  .add('with buttons', () => (
    <Panel
      icon="users"
      title="User"
      renderButtons={() => (
        <div>
          <Button onClick={action('save click')} primary>Save</Button>
          <Button onClick={action('cancel click')}>Cancel</Button>
        </div>
      )}
    >
      <FormRow label="First Name" required>
        <TextBox />
      </FormRow>
      <FormRow label="Last Name" required>
        <TextBox />
      </FormRow>
      <FormRow label="Password" required>
        <TextBox type="password" />
      </FormRow>
      <FormRow label="Confirm Password" required>
        <TextBox type="password" />
      </FormRow>
    </Panel>
  ))
  .add('custom styles', () => (
    <Panel
      icon="users"
      title="User"
      style={{ height: '300px', width: '500px', border: 'dashed 3px blue' }}
    >
      <FormRow label="First Name" required>
        <TextBox />
      </FormRow>
      <FormRow label="Last Name" required>
        <TextBox />
      </FormRow>
    </Panel>
  ));
