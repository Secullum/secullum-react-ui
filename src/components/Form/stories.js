import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Form from './index';
import Panel from '../Panel';
import FormRow from '../FormRow';
import TextBox from '../TextBox';
import Button from '../Button';

storiesOf('Form', module)
  .add('default', () => (
    <Form onSubmit={action('submited')}>
      <FormRow label="Username">
        <TextBox name="email" />
      </FormRow>
      <FormRow label="Password">
        <TextBox name="password" type="password" />
      </FormRow>
      <div style={{ marginTop: '10px', marginLeft: '160px' }}>
        <Button type="submit" primary>Submit</Button>
        <Button type="reset">Reset</Button>
      </div>
    </Form>
  ))
  .add('with panel', () => (
    <Panel
      title="Login"
      icon="sign-in"
      renderButtons={() => (
        <div style={{ marginLeft: '160px' }}>
          <Button form="myForm" type="submit" primary>Submit</Button>
          <Button form="myForm" type="reset">Reset</Button>
        </div>
      )}
    >
      <Form id="myForm" onSubmit={action('with panel submited')}>
        <FormRow label="Username">
          <TextBox name="email" />
        </FormRow>
        <FormRow label="Password">
          <TextBox name="password" type="password" />
        </FormRow>
      </Form>
    </Panel>
  ))
  .add('custom styles', () => (
    <Form onSubmit={action('custom styles submited')} style={{ border: 'dashed 3px green', borderRadius: '30px' }}>
      <FormRow label="Username">
        <TextBox name="email" />
      </FormRow>
      <FormRow label="Password">
        <TextBox name="password" type="password" />
      </FormRow>
      <div style={{ marginTop: '10px', marginLeft: '160px' }}>
        <Button type="submit" primary>Submit</Button>
        <Button type="reset">Reset</Button>
      </div>
    </Form>
  ));
