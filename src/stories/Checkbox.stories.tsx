import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Control } from './Control';

/**
 * Binary input for selecting zero or more options from a list.
 * Indeterminate state only for parent checkbox with mixed child selections.
 * Always pair with a visible text label.
 */
const meta = {
  title: 'Design System/Checkbox',
  component: Control,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { type: 'checkbox', onChange: fn() },
} satisfies Meta<typeof Control>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Use when users must independently select zero or more options from a list. */
export const Default: Story = { args: { checked: false, indeterminate: false, disabled: false, label: 'Option' } };

export const Checked: Story = { args: { checked: true, indeterminate: false, disabled: false, label: 'Option' } };

/** Indeterminate state only for parent checkbox with mixed child selections — never set manually. */
export const Indeterminate: Story = { args: { checked: false, indeterminate: true, disabled: false, label: 'Option' } };

export const Disabled: Story = { args: { checked: false, indeterminate: false, disabled: true, label: 'Option' } };
