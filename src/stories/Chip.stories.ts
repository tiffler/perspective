import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';

/**
 * Displays brief, categorical information with visual emphasis through color and style.
 * Use to communicate state, priority, or category of an item.
 * Intent variants map to semantic meaning; Style variants control visual prominence.
 */
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
      options: ['default', 'error', 'running', 'info', 'success', 'urgent'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'two-tone', 'half-tone', 'outline'],
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default intent for general tags without specific status. Solid for high emphasis. */
export const Standard: Story = {
  args: { intent: 'default', variant: 'solid', label: 'Status' },
};

/** Error intent for problems or failures. */
export const Error: Story = {
  args: { intent: 'error', variant: 'solid', label: 'Error' },
};

/** Running intent for in-progress states. */
export const Running: Story = {
  args: { intent: 'running', variant: 'solid', label: 'Running' },
};

/** Informational intent for neutral information. */
export const Info: Story = {
  args: { intent: 'info', variant: 'solid', label: 'Info' },
};

/** Success intent for positive outcomes. */
export const Success: Story = {
  args: { intent: 'success', variant: 'solid', label: 'Success' },
};

/** Urgent intent for time-sensitive issues. */
export const Urgent: Story = {
  args: { intent: 'urgent', variant: 'solid', label: 'Urgent' },
};

/** Two-tone variant — high emphasis with a tinted background and solid text. */
export const TwoTone: Story = {
  args: { intent: 'default', variant: 'two-tone', label: 'Status' },
};

/** Half-tone variant — medium emphasis for informative but not urgent statuses. */
export const HalfTone: Story = {
  args: { intent: 'default', variant: 'half-tone', label: 'Status' },
};

/** Outline variant — low emphasis for supplementary statuses. */
export const Outline: Story = {
  args: { intent: 'default', variant: 'outline', label: 'Status' },
};
