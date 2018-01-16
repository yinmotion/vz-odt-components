import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Components/Button/Simple', module)
  .add('text', 
  (() => 
    <Button onClick={action('clicked')}>Button</Button>
  )
);