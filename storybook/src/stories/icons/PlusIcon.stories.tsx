import { PlusIcon } from '@component-lib/icons';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PlusIcon> = {
  component: PlusIcon,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PlusIcon>;

export const Main: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <PlusIcon color="#000" variant="small" />
      <PlusIcon color="#000" variant="medium" />
      <PlusIcon color="#000" variant="large" />
    </div>
  ),
};
