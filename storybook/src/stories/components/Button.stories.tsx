import { Button } from '@component-lib/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  render: () => <Button variant="contained">Button</Button>,
};
