import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Panel from './index';
import FormRow from '../FormRow';
import TextBox from '../TextBox';
import Button from '../Button';

storiesOf('Panel', module)
  .add('default', () => (
    <Panel
      title="Login"
      icon="sign-in"
    >
      <FormRow label="User Name" required>
        <TextBox />
      </FormRow>
      <FormRow label="Password" required>
        <TextBox type="password" />
      </FormRow>
    </Panel>
  ))
  .add('with img icon', () => (
    <Panel
      title="Login"
      iconImageSrc="data:image/gif;base64,R0lGODlhIAAgAPcAAAgpexAxexAxhBg5hCE5hCFCjClCjClKjDFKjDFKlDlSjDlSlDlSnDlalEJalEJanEJjnEpSe0pae0pahEpalEpanEpjlEpjnEpjpVJajFJjlFJrnFJrpVJrrVprlFprnFprpVprrVpzpVpzrWNzlGNznGNzpWNzrWNztWN7rWtzjGt7nGt7rWt7tWuEtXN7pXOEpXOErXOEtXOEvXuMrXuMtXuMvYSMnISMpYSMvYSMxoSUrYSUvYSUxoSlzoTG/4yUpYyUrYyUtYyUxoycrYycvYycxpSUjJScrZScvZSczpSlxpTO/5yctZylrZylvZylxpylzpyttZytxpytzpy93py976WlpaWlraWlvaWlxqWthKWttaWtzqWt1qW1zqW11qXG562tra21va21xq211q291q3G563W/7W1tbW1vbW1xrW91rW93rXG1rXW/7Xe/729vb29zr293r3G1r3G3r3O3r3W573e973e/8bGxsbG1sbG3sbG58bO1sbO3sbO58be/8bn/861e87Ozs7O587W587e787e987n/9bW1tbW3tbW59bW79be3tbe59be79bv/97Ge97e3t7e797n597n797v997v/+fOe+fn5+fn7+fn9+fv9+f3/+/v7+/v9+/3//fWe/fejPfv1vf39/f3//f///8AAP/35////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAKgALAAAAAAgACAAAAj+AFEJHEgQFaUpPBLyMPJlU8GHEAdaMtKFUqmLFzeZ+RKxo8A6Sx6BAmWpZMlNKM0Y8viQTRFKljZZevSn5h+YKL/8YTnwUQpGkChBMkSHjVE2N4UykmGJJyoWUQxJ/TKlqtU/jP7UAdRFBs8/D7zUYdOlCA+zCYs8omSozlgMjFjKGCAjShEoOWTUgCFDRplNkBgBqhOlRRGWCwIQqFuDBwsSHkSIoGNpKJ85PVBwYEkgQIACJ8rQASLiwoUTNQrxGexlCAgELAd4/twFCx0zIBZc4GC6S5koOQwU4Dx7wBMnfAwxckDggfMWXZScCGCAZQLZnskg2VoGwQIOGB7+2IhiJESFByxTdPZMZ02bNicQPDhxwkQNKEMSYPDqkc0AA57t8IkcRXzwAQ1kKKLJRZ/4UcJOLDmAgGwKKFKKJp+ociEhXACBBCGffDIJT3UUsIABD+Sgwg1A4LCCBxY4cKIDN2iiiVNLHHBaDh9IIMEEGWRggQYbOGAAFHqUoodTUMyXQ0I0wPDCCzDA8MECXahCSClx8KSJIlnYt0QZWv3WhQsmjDGJJlt2ydMkhKTRhBBQdGFnEjsAgUUaccRho5tOfalHHGlgccWhiKaBISGEOAXRJIoQokcaaVj4iaQjOipQJILkccmXhCgSIpx6KKIpGj/88AYmoURiyCRiIQpaqqZ4WMEEGomYEsolpnSySKRxEHKjpmEcUYUngeBxyCeneGJHGnpkqikqPgyyhRRngGIKJnm8YYep0w5UiSiSDBLEIZ2+gUa4D6UyiiRE4IEGGoGwGxEpYeBq774eBQQAOw=="
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
      title="User"
      icon="users"
      renderButtons={() => (
        <div style={{ marginLeft: '160px' }}>
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
      title="User"
      icon="users"
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
