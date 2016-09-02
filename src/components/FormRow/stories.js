import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FormRow from './index';
import TextBox from '../TextBox';
import DropDownList from '../DropDownList';

const customRenderLabel = () => (
  <DropDownList
    options={[
      { id: 1, text: 'option 1' },
      { id: 2, text: 'option 2' },
      { id: 3, text: 'option 3' }
    ]}
    textKey="text"
    valueKey="id"
  />
);

storiesOf('FormRow', module)
  .add('default', () => (
    <FormRow label="Name">
      <TextBox />
    </FormRow>
  ))
  .add('required', () => (
    <FormRow label="Name" required>
      <TextBox />
    </FormRow>
  ))
  .add('error message', () => (
    <FormRow label="Name" required errorMessage="This field is required.">
      <TextBox error />
    </FormRow>
  ))
  .add('custom label', () => (
    <FormRow renderLabel={customRenderLabel}>
      <TextBox />
    </FormRow>
  ))
  .add('custom styles', () => (
    <FormRow
      label="Name"
      style={{ border: 'dashed 3px green', borderRadius: '15px' }}
      labelStyle={{ textAlign: 'left', marginLeft: '30px', textTransform: 'uppercase' }}
      fieldStyle={{ transform: 'scale(0.8)' }}
    >
      <TextBox />
    </FormRow>
  ))
  .add('multiple rows', () => (
    <div>
      <FormRow label="First Name" required>
        <TextBox />
      </FormRow>
      <FormRow label="Last Name" required>
        <TextBox />
      </FormRow>
      <FormRow renderLabel={customRenderLabel}>
        <TextBox />
      </FormRow>
      <FormRow label="Address" required errorMessage="This field is required.">
        <TextBox error />
      </FormRow>
      <FormRow label="Phone 1">
        <TextBox />
      </FormRow>
      <FormRow label="Phone 2">
        <TextBox />
      </FormRow>
    </div>
  ));
