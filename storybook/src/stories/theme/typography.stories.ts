import type { Meta, StoryObj } from '@storybook/react';

import { TypographyShowcase } from './showcases';

const meta: Meta<typeof TypographyShowcase> = {
  component: TypographyShowcase,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TypographyShowcase>;

export const Main: Story = {};
