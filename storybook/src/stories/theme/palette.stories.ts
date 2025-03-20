import type { Meta, StoryObj } from '@storybook/react';

import { PaletteShowcase } from './showcases';

const meta: Meta<typeof PaletteShowcase> = {
  component: PaletteShowcase,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PaletteShowcase>;

export const Main: Story = {};
