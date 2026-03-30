import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';

const meta = {
  title: 'Design System/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['default', 'error', 'running', 'informational', 'success', 'urgent'],
    },
    style: {
      control: 'select',
      options: ['solid', 'halftone', 'outline'],
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: { intent: 'default', style: 'solid', label: 'Status' },
};

export const Error: Story = {
  args: { intent: 'error', style: 'solid', label: 'Error' },
};

export const Running: Story = {
  args: { intent: 'running', style: 'solid', label: 'Running' },
};

export const Informational: Story = {
  args: { intent: 'informational', style: 'solid', label: 'Info' },
};

export const Success: Story = {
  args: { intent: 'success', style: 'solid', label: 'Success' },
};

export const Urgent: Story = {
  args: { intent: 'urgent', style: 'solid', label: 'Urgent' },
};

export const HalfTone: Story = {
  args: { intent: 'default', style: 'halftone', label: 'Status' },
};

export const Outline: Story = {
  args: { intent: 'default', style: 'outline', label: 'Status' },
};
