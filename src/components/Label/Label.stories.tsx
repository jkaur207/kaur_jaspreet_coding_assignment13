import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    disabled: { control: 'boolean' },
    bgcolor: { control: 'color' },
    fontWeight: { control: 'text' },
    children: { control: 'text' }
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'My Pretty Purple Dress!',
    disabled: false,
    bgcolor: 'purple',
    fontWeight: 'bold',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Label Text',
    disabled: true,
    bgcolor: 'lightgray',
    fontWeight: 'normal',
  },
};