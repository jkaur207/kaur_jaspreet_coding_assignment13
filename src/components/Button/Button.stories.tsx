import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',  // Using 'children'
  onClick: () => alert('Button Clicked!'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',  // Using 'children'
  disabled: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Test Label',  // Using 'label'
};

export const WithCustomBackgroundColor = Template.bind({});
WithCustomBackgroundColor.args = {
  children: 'Custom Color',  // Using 'children'
  bgColor: '#28a745',  // Custom background color
  onClick: () => alert('Custom Color Button Clicked!'),
};
