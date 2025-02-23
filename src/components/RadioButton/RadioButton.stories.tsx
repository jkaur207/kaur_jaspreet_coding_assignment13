import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    disabled: false,
    items: [
      { label: 'Visa', value: 'option1' },
      { label: 'Amex', value: 'option2' },
      { label: 'Mastercard', value: 'option3' },
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