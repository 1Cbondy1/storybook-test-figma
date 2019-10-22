import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';

export default {
  title: 'Buttons',
};

export const primaryButton = () =>
  <Button
    onClick={action('clicked')}
    buttonText="Primary Button"
    classProp="button-primary">
  </Button>;

export const secondaryButton = () =>
  <Button
    onClick={action('clicked')}
    buttonText="Secondary Button"
    classProp="button-secondary">
  </Button>;

  export const xdButton = () =>
  <Button
    onClick={action('clicked')}
    buttonText="herbs recipes"
    classProp="button-xd">
  </Button>;

