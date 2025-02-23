import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    disabled: false,
    items: [
      { label: 'Go Swimmimg', value: 'option1' },
      { label: 'Play Golf', value: 'option2' },
      { label: 'Watch Netflix', value: 'option3' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    items: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
  },
};