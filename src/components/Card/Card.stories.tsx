
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    imageSrc: '/Birthday.jpg',
    title: 'Happy Birthday To Me!',
    description: 'Cheers to being 20... Yayy!',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    imageSrc: 'https://via.placeholder.com/300x150',
    title: 'Card Title',
    description: 'This is a description of the card.',
    disabled: true,
  },
};
