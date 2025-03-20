import type { Meta, StoryObj } from '@storybook/react';

import { SpacingShowcase } from './showcases';

const meta: Meta<typeof SpacingShowcase> = {
  component: SpacingShowcase,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SpacingShowcase>;

export const Main: Story = {};
