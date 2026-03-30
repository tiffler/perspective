import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'ghost'] },
    intent: { control: 'select', options: ['default', 'destructive', 'warning'] },
    state: { control: 'select', options: ['default', 'disabled', 'loading'] },
    icon: { control: 'text' },
    iconPosition: { control: 'select', options: ['leading', 'trailing'] },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: { variant: 'solid', intent: 'default', state: 'default', label: 'Button' },
};

export const Outline: Story = {
  args: { variant: 'outline', intent: 'default', state: 'default', label: 'Button' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', intent: 'default', state: 'default', label: 'Button' },
};

export const Disabled: Story = {
  args: { variant: 'solid', intent: 'default', state: 'disabled', label: 'Button' },
};

export const Loading: Story = {
  args: { variant: 'solid', intent: 'default', state: 'loading', label: 'Button' },
};

export const WithLeadingIcon: Story = {
  args: { variant: 'solid', intent: 'default', state: 'default', label: 'Add item', icon: 'add', iconPosition: 'leading' },
};

export const WithTrailingIcon: Story = {
  args: { variant: 'outline', intent: 'default', state: 'default', label: 'Next', icon: 'arrow_forward', iconPosition: 'trailing' },
};

export const Destructive: Story = {
  args: { variant: 'solid', intent: 'destructive', state: 'default', label: 'Button' },
};

export const Warning: Story = {
  args: { variant: 'solid', intent: 'warning', state: 'default', label: 'Button' },
};
