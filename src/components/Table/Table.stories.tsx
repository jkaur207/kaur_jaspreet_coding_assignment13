import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    disabled: false,
    tableHeader: [
      { text: 'Product Name', color: 'black' },
      { text: 'Price', color: 'black' },
    ],
    tableRows: [
      [
        { text: 'Denim Jacket', color: 'blue' },
        { text: '$49.99', color: 'blue' },
      ],
      [
        { text: 'Floral Dress', color: 'green' },
        { text: '$39.67', color: 'green' },
      ],
    ],
    tableFooter: [
      { text: 'Total', color: 'black' },
      { text: '$89.66', color: 'black' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    tableHeader: [
      { text: 'Header 1', color: 'black' },
      { text: 'Header 2', color: 'black' },
    ],
    tableRows: [
      [
        { text: 'Row 1 Cell 1', color: 'blue' },
        { text: 'Row 1 Cell 2', color: 'blue' },
      ],
    ],
    tableFooter: [
      { text: 'Footer Cell 1', color: 'black' },
      { text: 'Footer Cell 2', color: 'black' },
    ],
  },
};


