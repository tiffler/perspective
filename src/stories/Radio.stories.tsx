import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Control } from './Control';

/**
 * Use when the user must choose exactly one option from a mutually exclusive set.
 * Always present at least two options. Always group under a visible group label.
 */
const meta = {
  title: 'Design System/Radio',
  component: Control,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { type: 'radio', onChange: fn() },
} satisfies Meta<typeof Control>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Use when the user must choose exactly one option from a mutually exclusive set. Always present at least two options. */
export const Default: Story = { args: { checked: false, disabled: false, label: 'Option' } };

/** Selected state. */
export const Checked: Story = { args: { checked: true, disabled: false, label: 'Option' } };

/** Disabled for options temporarily unavailable due to a resolvable condition. */
export const Disabled: Story = { args: { checked: false, disabled: true, label: 'Option' } };
