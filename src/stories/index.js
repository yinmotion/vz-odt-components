import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

const stories = storiesOf('Components/Button', module);

stories.addDecorator(withKnobs);

stories.add('Text', 
  (() => 
    <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>{text('Label', 'Button')}</Button>
  ));
